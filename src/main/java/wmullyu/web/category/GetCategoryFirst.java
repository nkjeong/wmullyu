package wmullyu.web.category;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Vector;

import javax.sql.DataSource;

import wmullyu.web.dbConnection.ConnectionDB;

public class GetCategoryFirst {
	public Vector<CategoryBean> getCategoryList(){
		Statement stmt = null;
		Connection conn = null;
		ResultSet rs = null;
		String sql = "SELECT * FROM `category_1`";
		Vector <CategoryBean> getCategoryList = new Vector<CategoryBean>();
		try {
			ConnectionDB cdb = new ConnectionDB();
			DataSource getds= cdb.getCon();
			conn = getds.getConnection();
			stmt = conn.createStatement();
			rs = stmt.executeQuery(sql);
			while(rs.next()){
				CategoryBean cfb = new CategoryBean();
				cfb.setCode(rs.getString("code"));
				cfb.setName(rs.getString("name"));
				getCategoryList.add(cfb);
			}
		}catch(SQLException e) {
		}finally {
			if(stmt != null) try{ stmt.close(); }catch(Exception ex){}
			if(conn != null) try{ conn.close(); }catch(Exception ex){}
	        if(rs != null) try{ rs.close(); }catch(Exception ex){}
		}
		return getCategoryList;
	}
}