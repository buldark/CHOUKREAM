package my.controller;

import static org.hamcrest.CoreMatchers.nullValue;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import my.bean.AddressDTO;
import my.bean.PointDTO;
import my.service.MyService;
import shop.bean.CompletedOrderDTO;
import shop.bean.ProductDTO;

@RestController
@CrossOrigin
@RequestMapping(value = "my")
public class MyController {

	@Autowired
	private MyService myService;
	
	@RequestMapping(path =  "addAddress")
	public void addAddress(@ModelAttribute AddressDTO addressDTO) {
		//System.out.println(addressDTO);
		myService.addAddress(addressDTO);
	}

	@RequestMapping(path = "getAllAddress")
	public List<AddressDTO> getAllAddress(@RequestParam String id){
		return myService.getAllAddress(id);
	}
	
	@RequestMapping(path = "getDefaultAddress")
	public Optional<AddressDTO> getDefaultAddress(@RequestParam String id){
		return myService.getDefaultAddress(id);
	}
	
	@RequestMapping(path = "getHavePoint")
	public int getHavePoint(@RequestParam String id) {
		
		Optional<PointDTO> pointDTO = myService.getHavePoint(id);
		System.out.println(pointDTO);
		if(pointDTO.isPresent()){
			return pointDTO.get().getPoint();
		}else {
			return 0;
		}
	}
	
	@RequestMapping(path = "changePoint")
	public void changePoint(@ModelAttribute PointDTO pointDTO) {
		myService.changePoint(pointDTO);
	}
	
	@DeleteMapping(path = "deleteAddress")
	public List<AddressDTO> deleteAddress(@RequestParam String id, long seq) {
		return myService.deleteAddress(id ,seq);
	}
	
	@RequestMapping(path = "test")
	public void test(@RequestBody List<PointDTO> list) {
		System.out.println(list);
	}
	
	@GetMapping(path = "getBuy")
	public List<ProductDTO> getBuy(@RequestParam long id){
		return myService.getBuy(id);
	}
	
	@GetMapping(path = "getDoneBuy")
	public List<ProductDTO> getDoneBuy(@RequestParam long id){
		return myService.getDoneBuy(id);
	}
	@GetMapping(path = "getSell")
	public List<ProductDTO> getSell(@RequestParam long id){
		return myService.getSell(id);
	}
	@GetMapping(path = "getSold")
	public List<ProductDTO> getSold(@RequestParam long id){
		return myService.getSold(id);
	}
	@GetMapping(path = "getAddressBySeq")
	public Optional<AddressDTO> getAddressBySeq(@RequestParam long seq){
		return myService.getAddressBySeq(seq);
	}
	@RequestMapping(path = "addressUpdate")
	public AddressDTO addressUpdate(@ModelAttribute AddressDTO addressDTO){
		return myService.addressUpdate(addressDTO);
	}
}
