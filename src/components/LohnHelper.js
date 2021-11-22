export const GetGrundlohn = (stunden, stundenlohn) => {
  return stunden * stundenlohn;
};

export const GetNachtzuschlag1 = (stunden, stundenlohn) => {
  const zuschlag = 0.25;
  return stunden * (stundenlohn * zuschlag);
};

export const GetNachtzuschlag2 = (stunden, stundenlohn) => {
  const zuschlag = 0.4;
  return stunden * (stundenlohn * zuschlag);
};

export const GetSonntagszuschlag = (stunden, stundenlohn) => {
  const zuschlag = 0.5;
  return stunden * (stundenlohn * zuschlag);
};
export const GetGesamtlohn = (lohn1, lohn2, lohn3, lohn4) => {
  return lohn1 + lohn2 + lohn3 + lohn4;
};
