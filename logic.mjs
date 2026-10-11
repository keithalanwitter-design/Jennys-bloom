/** Pure data helpers. No medical target or diagnosis is derived here. */
export const dayKey = (d = new Date()) => {
  const y = d.getFullYear();
  return `${y}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
};
export const weekStart = (d = new Date()) => {
  const out = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  out.setDate(out.getDate() - ((out.getDay()+6)%7));
  return out;
};
export const weekKeys = (d = new Date()) => Array.from({length:7},(_,i)=> {
  const v = weekStart(d); v.setDate(v.getDate()+i); return dayKey(v);
});
export const normalizedFood = s => String(s || '').toLowerCase().normalize('NFKD')
  .replace(/[^a-z0-9\s]/g,' ').replace(/\b(fresh|frozen|cooked|raw|organic|low fat|large|small|boneless|skinless)\b/g,' ')
  .replace(/\s+/g,' ').trim().replace(/ies$/,'y').replace(/s$/,'');
export function hasIngredient(pantry, ingredient) {
  const target = normalizedFood(ingredient);
  if (!target) return false;
  return pantry.some(p=>{
    const own = normalizedFood(p.name);
    return own === target || own.includes(target) || target.includes(own) && own.length>2;
  });
}
export function missingIngredients(pantry, ingredients) {
  return ingredients.filter(i=>!hasIngredient(pantry, i));
}
export function uniqueShopping(existing, added) {
  const present = new Set(existing.map(x=>normalizedFood(x.name)));
  return added.filter(x=>!present.has(normalizedFood(x))).map(x=>({id:globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2),name:x,checked:false}));
}
export const sumForDay = (entries, key, field = 'amount') => entries.filter(e=>e.date===key).reduce((s,e)=>s+(Number(e[field])||0),0);
export const clamp = (n, min, max) => Math.min(max,Math.max(min,Number(n)||0));
export const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const progressValue = (value,target) => target>0 ? Math.max(0,Math.min(100,Math.round(value/target*100))) : null;
export function goalProgress(goal, data, today=new Date()) {
  const dates=weekKeys(today), current=dayKey(today);
  if (goal.metric==='water') return sumForDay(data.water, current);
  if (goal.metric==='movement') return data.activityLogs.filter(x=>dates.includes(x.date)).reduce((s,x)=>s+(Number(x.minutes)||0),0);
  if (goal.metric==='mobility') return data.activityLogs.filter(x=>dates.includes(x.date)&&x.category==='mobility').length;
  if (goal.metric==='meals') return data.mealLogs.filter(x=>dates.includes(x.date)).length;
  if (goal.metric==='manual') return data.goalLogs.filter(x=>x.goalId===goal.id&&dates.includes(x.date)).length;
  return 0;
}
export const uid=()=>globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
