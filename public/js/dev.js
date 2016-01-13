$(document).ready(function() {
    $("#devPlaySampleInput").on("click", function() {
        $("[name='play[basin_name]']").val("Barito");
        $("[name='play[province_name]']").val("Papua");
        $("[name='play[analog_to]']").val("Discovery");
        $("[name='play[analog_distance]']").val("0 - 3");
        $("[name='play[shore]']").val("Onshore");
        $("[name='play[terrain]']").val("Jungle");
        $("[name='play[nearby_field]']").val("< 5");
        $("[name='play[nearby_infra]']").val("< 50");
        $("[name='play[remark]']").val("This is remark of super play");
        $("[name='play[s2_year]']").val("2009,2012");
        $("[name='play[s2_crossline]']").val("100");
        $("[name='play[s2_line_distance]']").val("1");
        $("[name='play[chem_sample]']").val("1000");
        $("[name='play[chem_depth]']").val("100");
        $("[name='play[grav_acreage]']").val("1000");
        $("[name='play[grav_depth]']").val("100");
        $("[name='play[resi_acreage]']").val("100");

        gcfTest('play');
    });

    $("#devLeadSampleInput").on("click", function() {
        $.quinzel.s2.reattach();
        $.quinzel.geo.reattach();
        $.quinzel.chem.reattach();
        $.quinzel.grav.reattach();
        $.quinzel.elec.reattach();
        $.quinzel.resi.reattach();
        $.quinzel.oter.reattach();
        $("[name='lead[basin_name]']").val("Barito");
        $("[name='lead[province_name]']").val("Bali");
        $("[name='lead[structure_name]']").val("Test Structure");
        $("[name='lead[closure_name]']").val("Test Closure");
        $("[name='lead[latitude][degree]']").val('20');
        $("[name='lead[latitude][minute]']").val('59');
        $("[name='lead[latitude][second]']").val('59');
        $("[name='lead[latitude][cardinal]']").val('N');
        $("[name='lead[longitude][degree]']").val('145');
        $("[name='lead[longitude][minute]']").val('59');
        $("[name='lead[longitude][second]']").val('59');
        $("[name='lead[clarified]']").val('Join Study');
        $("[name='lead[initiate]']").val('2015-01-01');
        $("[name='lead[shore]']").val('Onshore');
        $("[name='lead[terrain]']").val('Farmland');
        $("[name='lead[nearby_field]']").val('< 5');
        $("[name='lead[nearby_infra]']").val('< 50');
        $("[name='lead[remark]']").val('Remark at its best');
        $("[name='lead[survey][]']").prop('checked', true);
        $("[name='lead[s2_low]']").val('50');
        $("[name='lead[s2_best]']").val('100');
        $("[name='lead[s2_high]']").val('150');
        $("[name='lead[s2_year]']").val('2010, 2012');
        $("[name='lead[s2_vintage]']").val('Multiple');
        $("[name='lead[s2_crossline]']").val('5');
        $("[name='lead[s2_coverage]']").val('10000');
        $("[name='lead[s2_avg_interval]']").val('23');
        $("[name='lead[s2_late_year]']").val('2015');
        $("[name='lead[s2_late_method]']").val('PSTM');
        $("[name='lead[s2_image]']").val('Good');
        $("[name='lead[geo_low]']").val('50');
        $("[name='lead[geo_best]']").val('100');
        $("[name='lead[geo_high]']").val('150');
        $("[name='lead[geo_year]']").val('2010, 2012');
        $("[name='lead[geo_method]']").val('Stream Sampling');
        $("[name='lead[geo_coverage]']").val('200');
        $("[name='lead[chem_low]']").val('50');
        $("[name='lead[chem_best]']").val('100');
        $("[name='lead[chem_high]']").val('150');
        $("[name='lead[chem_year]']").val('2010, 2012');
        $("[name='lead[chem_interval]']").val('5');
        $("[name='lead[chem_sample]']").val('49');
        $("[name='lead[chem_rock]']").val('49');
        $("[name='lead[chem_fluid]']").val('42');
        $("[name='lead[chem_composition]']").val('NaCL');
        $("[name='lead[grav_low]']").val('50');
        $("[name='lead[grav_best]']").val('100');
        $("[name='lead[grav_high]']").val('150');
        $("[name='lead[grav_year]']").val('2010, 2012');
        $("[name='lead[grav_method]']").val('Airbones');
        $("[name='lead[grav_coverage]']").val('4000');
        $("[name='lead[grav_penetrate]']").val('300');
        $("[name='lead[grav_recorder]']").val('30');
        $("[name='lead[elec_low]']").val('50');
        $("[name='lead[elec_best]']").val('100');
        $("[name='lead[elec_high]']").val('150');
        $("[name='lead[elec_year]']").val('2010, 2012');
        $("[name='lead[elec_method]']").val('Airbones');
        $("[name='lead[elec_coverage]']").val('4000');
        $("[name='lead[elec_penetrate]']").val('300');
        $("[name='lead[elec_recorder]']").val('30');
        $("[name='lead[resi_low]']").val('50');
        $("[name='lead[resi_best]']").val('100');
        $("[name='lead[resi_high]']").val('150');
        $("[name='lead[resi_year]']").val('2010, 2012');
        $("[name='lead[resi_method]']").val('Airbones');
        $("[name='lead[resi_coverage]']").val('4000');
        $("[name='lead[resi_penetrate]']").val('300');
        $("[name='lead[resi_recorder]']").val('30');
        $("[name='lead[oter_low]']").val('50');
        $("[name='lead[oter_best]']").val('100');
        $("[name='lead[oter_high]']").val('150');
        $("[name='lead[oter_year]']").val('2010, 2012');
        $("[name='lead[oter_remark]']").val('Perhaps, this is 3D');

        gcfTest('lead');
    });

    function gcfTest(classification) {
        $("[name='gcf[src_data]']").val("Proven");
        $("[name='gcf[src_age_period]']").val("Cambrian");
        $("[name='gcf[src_age_epoch]']").val("Early");
        $("[name='gcf[src_formation]']").val("Baturaja");
        $("[name='gcf[src_formation_level]']").val("Lower");
        $("[name='gcf[src_kerogen]']").val("I/II");
        $("[name='gcf[src_capacity]']").val("> 4");
        $("[name='gcf[src_heatflow]']").val("> 3.0");
        $("[name='gcf[src_distribution]']").val("Localized");
        $("[name='gcf[src_continuity]']").val("Bad");
        $("[name='gcf[src_maturity]']").val("Overmature");
        $("[name='gcf[src_other]']").val("Yes");
        $("[name='gcf[res_data]']").val("Proven");
        $("[name='gcf[res_distribution]']").val("Single Distribution");
        $("[name='gcf[res_continuity]']").val("Tank");
        $("[name='gcf[res_dep_set]']").val("Paralic");
        $("[name='gcf[res_primary]']").val("0 - 10");
        $("[name='gcf[res_second]']").val("Vugs Porosity");
        $("[name='gcf[trp_data]']").val("Proven");
        $("[name='gcf[trp_age_period]']").val("Miocene");
        $("[name='gcf[trp_age_epoch]']").val("Late");
        $("[name='gcf[trp_geometry]']").val("Horst Simple");
        $("[name='gcf[trp_closure]']").val("2-Way");
        $("[name='gcf[trp_seal_age_period]']").val("Miocene");
        $("[name='gcf[trp_seal_age_epoch]']").val("Late");
        $("[name='gcf[trp_seal_formation]']").val("Talangakar");
        $("[name='gcf[trp_seal_formation_level]']").val("Lower");
        $("[name='gcf[trp_seal_distribution]']").val("Single Distribution Impermeable Rocks");
        $("[name='gcf[trp_seal_continuity]']").val("Truncated");
        $("[name='gcf[trp_seal_type]']").val("Primary");
        $("[name='gcf[dyn_data]']").val("Proven");
        $("[name='gcf[dyn_authenticate]']").val("Oil Seep");
        $("[name='gcf[dyn_kitchen]']").val("Near (2 - 5 Km)");
        $("[name='gcf[dyn_tectonic]']").val("Single Order");
        $("[name='gcf[dyn_regime_early_period]']").val("Miocene");
        $("[name='gcf[dyn_regime_early_epoch]']").val("Late");
        $("[name='gcf[dyn_regime_late_period]']").val("Miocene");
        $("[name='gcf[dyn_regime_late_epoch]']").val("Late");
        $("[name='gcf[dyn_preservation]']").val("Occur");
        $("[name='gcf[dyn_pathway]']").val("Vertical");
        $("[name='gcf[dyn_age_period]']").val("Holocene");
        $("[name='gcf[dyn_age_epoch]']").val("Late");

        if (classification === 'play') {
            $("[name='gcf[res_age_period]']").val("Cambrian");
            $("[name='gcf[res_age_epoch]']").val("Early");
            $("[name='gcf[res_formation]']").val("Baturaja");
            $("[name='gcf[res_formation_level]']").val("Lower");
            $("[name='gcf[res_litho]']").val("Coal");
            $("[name='gcf[res_dep_env]']").val("Ridge");
            $("[name='gcf[trp_type]']").val("Structural Drape");
        }
    }
});