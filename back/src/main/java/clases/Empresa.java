package clases;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class Empresa {
	
	private List<Periodo> periodos;
	private String nombre;
	
	public Empresa(){
		
	}
	
	public Empresa(JSONObject empresa){
		this.nombre = (String) empresa.get("nombre");
		for(Object periodo:(JSONArray)empresa.get("periodos"))
			addPeriodo(new Periodo((JSONObject)periodo));
	}
	
	public List<Periodo> getPeriodos() {
		return periodos;
	}
	public void addPeriodo(Periodo periodo) {
		if(periodos == null)
			periodos = new ArrayList<Periodo>();
		periodos.add(periodo);
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
}
