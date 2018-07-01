package com.paigunna.api.service.impl;

import com.paigunna.api.domain.Notification;
import com.paigunna.api.repo.NotiRepo;
import com.paigunna.api.service.NotiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Arm
 */
@Service
public class NotiServiceImpl implements NotiService {

    @Autowired
    private NotiRepo notiRepo;

    @Override
    public Notification save(Notification notification) {
        return notiRepo.save(notification);
    }
}
