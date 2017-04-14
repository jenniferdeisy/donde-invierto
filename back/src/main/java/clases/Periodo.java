package clases;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class Periodo {

	private List<Cuenta> cuentas;
	private String anio;
	private int startRange;
	private int endRange;
	private String nombre;
	
	public Periodo(){
		
	}
	
	public Periodo(JSONObject periodo) {
		this.anio = String.valueOf((Long)periodo.get("anio"));
		this.nombre = (String) periodo.get("nombre");
		this.startRange = ((Long) ((JSONArray)periodo.get("rango")).get(0)).intValue();
		this.endRange = ((Long) ((JSONArray)periodo.get("rango")).get(1)).intValue();
		for(Object cuenta:(JSONArray)periodo.get("cuentas"))
			addCuenta(new Cuenta((JSONObject)cuenta));
	}
	
	public List<Cuenta> getCuentas() {
		return cuentas;
	}
	public void addCuenta(Cuenta cuenta) {
		if(cuentas == null)
			cuentas = new ArrayList<Cuenta>();
		cuentas.add(cuenta);
	}
	public String getAnio() {
		return anio;
	}
	public void setAnio(String anio) {
		this.anio = anio;
	}
	public int getStartRange() {
		return startRange;
	}
	public void setStartRange(int startRange) {
		this.startRange = startRange;
	}
	public int getEndRange() {
		return endRange;
	}
	public void setEndRange(int endRange) {
		this.endRange = endRange;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}
