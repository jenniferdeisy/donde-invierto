package clases;

import java.math.BigDecimal;

import org.json.simple.JSONObject;

public class Cuenta {

	private String descripcion;
	private BigDecimal valor;
	
	public Cuenta(){
		
	}
	
	public Cuenta(JSONObject cuenta) {
		this.descripcion = (String)cuenta.get("descripcion");
		this.valor = new BigDecimal((Long)cuenta.get("valor"));
	}
	public BigDecimal getValor() {
		return valor;
	}
	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

}
