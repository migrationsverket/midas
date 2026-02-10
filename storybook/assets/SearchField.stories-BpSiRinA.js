import{r as m,f as l,j as t}from"./iframe-D6ADc9_c.js";import{S as d}from"./SearchField-dzLUUf5Q.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Qq2IcLG_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CEf-u91N.js";import"./utils-Co-WyaVB.js";import"./useLocalizedStringFormatter-BzbrAoH2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DRJk2b6v.js";import"./useFocusRing-QJf4MrA-.js";import"./index-D1aif8GU.js";import"./index-Ctq9vtSb.js";import"./useFormValidation-BRorHZ80.js";import"./useField-DhT5MPzX.js";import"./Button-BD1tt09E.js";import"./Hidden-BAUwWGh2.js";import"./useLabels-BSs_hlue.js";import"./useButton-RmGmQnEE.js";import"./search-DvIqKTuE.js";import"./createLucideIcon-D0OOsTjF.js";import"./ClearButton-Ba3rkMXt.js";import"./Button-CIEzI-V7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTSyD4LW.js";import"./VisuallyHidden-CBsbYA_W.js";import"./x-5V4xGIcw.js";import"./FieldError-DfqU_xU4.js";import"./Text-Uw6K1FwN.js";import"./Text-Cpi5Nlnk.js";import"./RSPContexts-CeqDtQgt.js";import"./Collection-DYRtxejX.js";import"./index-Dt_fZTmi.js";import"./DragAndDrop-jEcQvqmL.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-zfcXVD4I.js";import"./SelectionManager-BRVSpNSw.js";import"./useEvent-CyxeHTbo.js";import"./useDescription-3hQMCdT7.js";import"./inertValue-C47t78Zy.js";import"./useHighlightSelectionDescription-BOoa6prP.js";import"./useUpdateEffect-DjAKDv4V.js";import"./ListKeyboardDelegate-CB_Qp04D.js";import"./useHasTabbableChild-Br-tlY1B.js";import"./Checkbox-DHxiHUzN.js";import"./Form-DN_MDLWN.js";import"./check-P6HwLFPb.js";import"./useToggleState-Cg58Vg1m.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
