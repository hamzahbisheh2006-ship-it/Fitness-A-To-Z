import Button from "@mui/material/Button";

export default function MuscleTabs({ muscles, activeMuscle, onChange }) {
  return (
    <div className="ex-tabs">
      {muscles.map((m) => {
        const active = m === activeMuscle;
        return (
          <Button
            key={m}
            variant={active ? "contained" : "outlined"}
            onClick={() => onChange(m)}
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1,
              fontWeight: 700,
              borderColor: "rgba(255,255,255,0.2)",
              color: active ? "white" : "rgba(255,255,255,0.7)",
              backgroundColor: active ? "#dc2626" : "transparent",
              "&:hover": {
                borderColor: "rgba(255,255,255,0.4)",
                backgroundColor: active ? "#b91c1c" : "rgba(255,255,255,0.06)",
              },
            }}
          >
            {m.toUpperCase()}
          </Button>
        );
      })}
    </div>
  );
}
