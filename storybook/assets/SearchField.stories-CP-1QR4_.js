import{r as m,f as l,j as t}from"./iframe-COikYHdP.js";import{S as d}from"./SearchField-Cp3WEbPA.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DN4a6JEw.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Dhscz2t0.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cl3D1B3q.js";import"./utils-BMDm-KrN.js";import"./useLocalizedStringFormatter-Dt-u1m1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-RLOY_8_i.js";import"./useFocusRing-BWhmDfF8.js";import"./index-DaHyXhuy.js";import"./index-E3BpGcaE.js";import"./useFormValidation-B9TCmMh5.js";import"./useField-Cj2sp65a.js";import"./Button-AP7Y4Mno.js";import"./Hidden-BkpCwkk8.js";import"./useLabels-M7dy5Zja.js";import"./useButton-CCmPBSSV.js";import"./search-BaaVBFSl.js";import"./createLucideIcon-Cfor4pko.js";import"./ClearButton-fqUozMXp.js";import"./Button-jvTkoE8j.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-fXUv9IGD.js";import"./VisuallyHidden-PvYD6Ub5.js";import"./x-DsF834kI.js";import"./FieldError-DV7LrvHp.js";import"./Text-NJjQXwoJ.js";import"./Text-B3B9omX-.js";import"./RSPContexts-BYXms5mf.js";import"./Collection-9SssQ7g7.js";import"./index-C6l6_kf4.js";import"./DragAndDrop-DZWJKb7f.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEa7QTXJ.js";import"./SelectionManager-BpR3qSNY.js";import"./useEvent-DLghMCOA.js";import"./useDescription-BHrfYc6I.js";import"./inertValue-D5fuOLGc.js";import"./useHighlightSelectionDescription-DsaBHmmc.js";import"./useUpdateEffect-C7ITgazV.js";import"./ListKeyboardDelegate-D1f7Mx4w.js";import"./useHasTabbableChild-DNa8XJj7.js";import"./Checkbox-CDPf7pnG.js";import"./Form-DAtbnfCi.js";import"./check-BjeCz2Me.js";import"./useToggleState-CVocR7-M.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
