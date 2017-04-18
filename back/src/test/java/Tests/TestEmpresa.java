package Tests;

import static org.junit.Assert.*;

import java.net.URL;

import org.apache.commons.io.IOUtils;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.junit.Before;
import org.junit.Test;

import clases.Empresa;


public class TestEmpresa {
	
	private JSONObject obj;
	
	@Before
	public void setUp() throws Exception {
		URL input = TestEmpresa.class.getClassLoader().getResource("Prueba-Archivo.txt");
		JSONParser parser = new JSONParser();
		obj = (JSONObject) parser.parse(IOUtils.toString(input));
	}

	@Test
	public void testCargaArchivoEmpresas() {
		JSONArray empresas = ((JSONArray)obj.get("empresas"));
		Empresa emp = new Empresa((JSONObject) empresas.get(0));
		
		assertTrue(emp.getNombre().equals("snapchat"));
		assertTrue(emp.getPeriodos().size()==2);
	}

	
}
