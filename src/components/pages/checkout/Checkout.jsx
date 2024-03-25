import "./Checkout.css";
export const Checkout = ({ saveUserData, sendData, purchaseId }) => {
  return (
    <div className="checkout-container">
      <h2>COMPRA FINALIZADA</h2>

      {purchaseId ? (
        <h3>
          ID de seguimiento: <span>{purchaseId}</span>
        </h3>
      ) : (
        <form onSubmit={sendData}>
          <p>Información de contacto:</p>
          <input
            name="nombre"
            type="text"
            placeholder="Name"
            onChange={saveUserData}
            required
          />
          <input
            name="telefono"
            type="phone"
            placeholder="Phone"
            onChange={saveUserData}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={saveUserData}
            required
          />
          <button className="boton-detalles">Buy products</button>
        </form>
      )}
    </div>
  );
};
