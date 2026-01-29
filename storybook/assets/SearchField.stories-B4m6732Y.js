import{r as m,f as l,j as t}from"./iframe-BvxrP4H_.js";import{S as d}from"./SearchField-LQh0HRAA.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DmHn2NEV.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D2EAi2j4.js";import"./utils-DRwSYmkY.js";import"./useLocalizedStringFormatter-D4pCyGYe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CaBalM21.js";import"./useFocusRing-CJdHKEcp.js";import"./index-DZ-u2hu8.js";import"./index-D44wzwBB.js";import"./useFormValidation-DHvoEVhR.js";import"./useField-BpVbfcEn.js";import"./Button-BEiciYfb.js";import"./Hidden-D4jsxrLb.js";import"./useLabels-BMmbJ9_b.js";import"./useButton-uALjNSWo.js";import"./search-Dkk31hPr.js";import"./createLucideIcon-B5KIjSHM.js";import"./ClearButton-CjC4V1gI.js";import"./Button-A9AEz-p5.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_Mu1zyu.js";import"./VisuallyHidden-BJsqer9T.js";import"./x-DSnh6kAd.js";import"./FieldError-D1Yw6ERp.js";import"./Text-BJUv6RK-.js";import"./Text-DeMAVr2b.js";import"./RSPContexts-DEykMfDO.js";import"./Collection-BnA9gHIE.js";import"./index-DMqlofMa.js";import"./DragAndDrop-BJIlDuTE.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-pSPS3JIv.js";import"./SelectionManager-BH5HcElr.js";import"./useEvent-CgFksn0F.js";import"./useDescription-CWz-Nrf1.js";import"./inertValue-BLaMpHK-.js";import"./useHighlightSelectionDescription-oTOpQEIQ.js";import"./useUpdateEffect-B-dKDf-G.js";import"./ListKeyboardDelegate-DbICXpzW.js";import"./useHasTabbableChild-ClJ97CT8.js";import"./Checkbox-D0pa2blO.js";import"./Form-CWCyzf8u.js";import"./check-B34nOuLp.js";import"./useToggleState-D8g27Ds2.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
