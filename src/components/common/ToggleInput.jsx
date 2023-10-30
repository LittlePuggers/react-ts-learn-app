export function ToggleInput() {
  return (
    <div className="toggle-input">
      <label for="switch" className="toggle-label">
        Active
      </label>
      <input type="checkbox" id="switch" className="checkbox" />

      <label for="switch" className="toggle"></label>
    </div>
  );
}
