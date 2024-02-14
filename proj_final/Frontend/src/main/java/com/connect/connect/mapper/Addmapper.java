package com.connect.connect.mapper;

import com.connect.connect.dto.Adddto;
import com.connect.connect.entity.Addentity;

public class Addmapper {

    public static Adddto maptoServicedto(Addentity addentity) {
        // Implement the mapping logic
        return new Adddto(
                addentity.getId(),
                addentity.getName(),
                addentity.getBoathousename(),
                addentity.getPhonenumber(),
                addentity.getLocation()
                
        );
    }

    public static Addentity maptoServiceentity(Adddto adddto) {
        // Implement the mapping logic
        return new Addentity(
                adddto.getId(),
                adddto.getName(),
                adddto.getBoathousename(),
                adddto.getPhonenumber(),
                adddto.getLocation()
            
        );
    }
}