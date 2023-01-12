package shop.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import shop.bean.NewProductDTO;

@Repository
public interface NewProductDAO extends JpaRepository<NewProductDTO, Integer> {

	@Transactional
	@Modifying
	@Query("delete from NewProductDTO newproductDTO where newproductDTO.seq = :seq ")
	// @Query(value="delete from NewProductDTO newproductDTO where newproductDTO.seq = :seq", nativeQuery = true)
	// query문 그대로 적으면된다
	public void deleteBySeq(@Param("seq") int seq);
	
	// my sql 버전으로 바꿔야할듯 
	// @Query(value = "select * from NewProductDTO newproductDTO where newproductDTO.brand like '%' || :keyword || '%'", nativeQuery = true)
	// @Query(value= "select * from NewProductDTO newproductDTO  where newproductDTO.brand = :keyword", nativeQuery = true)
	// @Query("select newProductDTO from NewProductDTO newproductDTO where newproductDTO.brand = :keyword")
	@Query("SELECT u FROM NewProductDTO u WHERE u.brand like %:keyword%")
	public List<NewProductDTO> getSearchBrand(@Param("keyword") String keyword);
	
	// @Query(value = "select * from NewProductDTO newproductDTO where newproductDTO.category like '%' || :keyword || '%'", nativeQuery = true)
	// @Query(value= "select * from NewProductDTO newproductDTO  where newproductDTO.category = :keyword", nativeQuery = true)
	// @Query("select newProductDTO from NewProductDTO newproductDTO where newproductDTO.category = :keyword")
	@Query("SELECT u FROM NewProductDTO u WHERE u.category like %:keyword%")
	public List<NewProductDTO> getSearchCategory(@Param("keyword") String keyword);

	public Optional<NewProductDTO> findBySeq(int seq);
	
//	@Query("select newProductDTO from NewProductDTO newproductDTO where newproductDTO.brand like '%' || :keyword || '%'") // 이런 Query 문을 수행해주세요
//	//         객체명      객체타입(테이블명) 객체명 이건 그냥 문법 
//	public List<NewProductDTO> getSearchBrand(@Param("keyword") String keyword); // keyword 변수 받고싶을때 @Param 사용 
//	
//	@Query("select newProductDTO from NewProductDTO newproductDTO where newproductDTO.category like '%' || :keyword || '%'") // 이런 Query 문을 수행해주세요
//	public List<NewProductDTO> getSearchCategory(@Param("keyword") String keyword);

}
