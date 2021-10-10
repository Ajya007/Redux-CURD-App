import Table from "./Table"

const Form = () => {
    return(
        <div>
            <form>

                <div className="form-wrapper">
                {/* Manufacturer */}

                <div className="form-control">
                <label > <div>Manufacturer </div>

                <select name="manufacturer" id="manufacturer" className="custom-select">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>  
                </select>
                </label>

                </div>

                {/* Product Type */}

                <div className="form-control">
                    <label > <div>Product Type</div>
                <select name="product-type" id="product-type" className="custom-select">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>  
                </select>
                </label>

                </div>


                 {/* Code */}

                 <div className="form-control">
                    <label ><div>Code</div>
                        <input type="text" />
                </label>

                </div>


                 {/* Name */}

                 <div className="form-control">
                    <label> <div>Name</div>
               <input type="text" />
                </label>

                </div>



                 {/* Description */}

                 <div className="form-control">
                    <label> <div>Description</div>
                  <textarea />
                </label>

                </div>
</div>
                <div className="form-btn">
                    <button className="submit">submit</button>
                    <button className="reset">reset</button>
                </div>
                
            </form>

            <Table />
        </div>
    )
}

export default Form