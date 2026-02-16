import{r as m,f as l,j as t}from"./iframe-CjsN2Sbl.js";import{S as d}from"./SearchField-DO0kXjJA.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-opszbWNP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DPkQCx_c.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-pLjBfoN3.js";import"./utils-COI7mk-Z.js";import"./useLocalizedStringFormatter-BbQDdHsq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-NUC4aX3Z.js";import"./useFocusRing-DiEIFPwp.js";import"./index-CKo9uiwm.js";import"./index-B8NePwnw.js";import"./useFormValidation-CraaeZ4V.js";import"./useField-B0YexPGJ.js";import"./Button-CJVqDdWG.js";import"./Hidden-B_kzivom.js";import"./useLabels-CwB4JwE6.js";import"./useButton-qnOMufHE.js";import"./search-Cg9iCME3.js";import"./createLucideIcon-CiVnvI1n.js";import"./ClearButton-ChQ-wViy.js";import"./Button-BvGYLpp9.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BnIikKMu.js";import"./VisuallyHidden-CfSP2Ia7.js";import"./x-DkVq0ORE.js";import"./FieldError-CrPR-bnN.js";import"./Text-BQK0eZgF.js";import"./Text-CSqjNMss.js";import"./RSPContexts-DwL8agvn.js";import"./Collection-kM4C1fOf.js";import"./index-eAOazQnS.js";import"./DragAndDrop-B5J7ZTaQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dtxpd41E.js";import"./SelectionManager-kGv9cFEb.js";import"./useEvent-BAcO_i_L.js";import"./useDescription-1l4I4YYw.js";import"./inertValue-DEq0fbpc.js";import"./useHighlightSelectionDescription-Bu-yVib-.js";import"./useUpdateEffect-DdZDUQUD.js";import"./ListKeyboardDelegate-BcdPtsBu.js";import"./useHasTabbableChild-s2VQgOzz.js";import"./Checkbox-CSviWfbN.js";import"./Form-ZhegcCUs.js";import"./check-CSNsukEx.js";import"./useToggleState-CrtNWSV2.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
