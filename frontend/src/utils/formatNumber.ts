export default function formatNumber(value: number | string): string {
  const formatter = new Intl.NumberFormat('pt-BR');

  return formatter.format(Number(value));
}
