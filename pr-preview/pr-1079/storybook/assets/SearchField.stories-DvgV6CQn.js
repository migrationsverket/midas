import{r as m,f as l,j as t}from"./iframe-BemYTmI0.js";import{S as d}from"./SearchField-BziiJOug.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CvnY5O9m.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CpK-5b_b.js";import"./utils-BFE3Bu5p.js";import"./useLocalizedStringFormatter-dRW-fgCh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C-GApOC2.js";import"./useFocusRing-DZNPQtTp.js";import"./index-ClgbtUC1.js";import"./index-BYexVBob.js";import"./useFormValidation-Hprlhq0d.js";import"./useField-BByJZkIc.js";import"./Button-BIUCE2_i.js";import"./Hidden-BgieuMJL.js";import"./useLabels-B0oUE5fB.js";import"./useButton-BFMyhuBV.js";import"./search-BbDitYjw.js";import"./createLucideIcon-CvZzPSN7.js";import"./ClearButton-180veWio.js";import"./Button-BvlrAquf.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CsgibMpR.js";import"./VisuallyHidden-BYKpW6eG.js";import"./x-DusiX_N1.js";import"./FieldError-Cmx8qBX6.js";import"./Text-BdKoRU3R.js";import"./Text-C_3jh_f2.js";import"./RSPContexts-Bpi28sKY.js";import"./Collection-CVw2CSpD.js";import"./index-BwX8aiOo.js";import"./DragAndDrop-CkMYVJgV.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DBlRDH-v.js";import"./SelectionManager-CETzm5H2.js";import"./useEvent-BjqKnd5t.js";import"./useDescription-DhkrqMYF.js";import"./inertValue-ByXHBL-s.js";import"./useHighlightSelectionDescription-DFneW_PP.js";import"./useUpdateEffect-1vUf0G1K.js";import"./ListKeyboardDelegate-CUrp1wRU.js";import"./useHasTabbableChild-Bva6DccO.js";import"./Checkbox-CET8pLBG.js";import"./Form-Cl-wZTVf.js";import"./check-C0jOVUR7.js";import"./useToggleState-ijvHJaa3.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
