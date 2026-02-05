import{r as m,f as l,j as t}from"./iframe-Gk5MEbtf.js";import{S as d}from"./SearchField-5YxksIzN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CR3mCiGC.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D6DRt1-U.js";import"./utils-FYzLBBKM.js";import"./useLocalizedStringFormatter-CJFI85ze.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DBqyAHfj.js";import"./useFocusRing-WCMdeDPk.js";import"./index-BR8-lUkO.js";import"./index-D_XTGtZn.js";import"./useFormValidation-DHhvC1R-.js";import"./useField-Dxt7Dh66.js";import"./Button-BwdIuzcz.js";import"./Hidden-DGa8KKgC.js";import"./useLabels-C555CKHB.js";import"./useButton-Df05FaMj.js";import"./search-D0Nm_YTF.js";import"./createLucideIcon-BsHpl2bp.js";import"./ClearButton-qvDNwSbB.js";import"./Button-B5zSSp1x.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BIW-Yh1F.js";import"./VisuallyHidden-BZBSJD1a.js";import"./x-DLbbIzYm.js";import"./FieldError-Baa_Kzdb.js";import"./Text-IP7yd6GC.js";import"./Text-B-qEqFBc.js";import"./RSPContexts-D7f3u4-c.js";import"./Collection-CTg3a-LF.js";import"./index-C5D58yZq.js";import"./DragAndDrop-6c1x62xx.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DE0dXJyi.js";import"./SelectionManager-D4T18dtQ.js";import"./useEvent-kxVIpsfo.js";import"./useDescription-C6ibjGIG.js";import"./inertValue-Dv7Foors.js";import"./useHighlightSelectionDescription-COIQJ644.js";import"./useUpdateEffect-D96zWjbm.js";import"./ListKeyboardDelegate-sTv_qp8F.js";import"./useHasTabbableChild-BoEn7fuP.js";import"./Checkbox-9F1vqAjb.js";import"./Form-AuxABJFX.js";import"./check-US-AfPLA.js";import"./useToggleState-c4WOe3kf.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
