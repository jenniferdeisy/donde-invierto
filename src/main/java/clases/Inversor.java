package clases;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Inversor {

	private String nombreInversor;
	private List inversiones = new ArrayList<>();

	public Inversor(String nombre) {
		nombreInversor = nombre;
	}
	
	public void cargarInversion(String inversion) {
		inversiones.add(inversion);
	}
	
	public void printNombre() {
		System.out.println(nombreInversor);
	}
	
	public String getNombre() {
		return this.nombreInversor;
	}

}
