# R4L – Abgang + Echo

R4L ist ein Move im NC-System.

## Bedeutung
- **Abgang**: Sprecher verlässt oder übergibt.
- **Echo**: Der Satz wird gespiegelt.

## Verwendung
R4L wird vom RAWATOR ausgelöst, wenn:
- `role === 1`
- kein Impuls vorliegt

## Output
```json
{
  "move": "R4L",
  "action": "abgang",
  "echo": true
}

