import{r as m,f as l,j as t}from"./iframe-BgTJCWOi.js";import{S as d}from"./SearchField-BpWxyiTs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C8fnlQwa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-7UzvBFe4.js";import"./utils-bx0JNicM.js";import"./useLocalizedStringFormatter-DzvgYJWh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BC76DPou.js";import"./useFocusRing-CQGFmCQM.js";import"./index-Di0LCwPl.js";import"./index-nvK8JwcD.js";import"./useFormValidation-DdQ-XZ_w.js";import"./useField-G_6qpuwG.js";import"./Button-DFN5fdXi.js";import"./Hidden-1E0jU_sg.js";import"./useLabels-C6Pff7p0.js";import"./useButton-RwbbtEdP.js";import"./search-DLPbmQjQ.js";import"./createLucideIcon-BMuWalIG.js";import"./ClearButton-DnN07v5W.js";import"./Button-CUni_Rhy.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-DmYhpSJF.js";import"./VisuallyHidden-COxax3nI.js";import"./x-seHATWdx.js";import"./FieldError-D1yKmAxB.js";import"./Text-BPwtGfCt.js";import"./Text-D9p-rhNz.js";import"./RSPContexts-CeugRKEP.js";import"./Collection-e6P1B0pt.js";import"./index-CZO_OfAH.js";import"./DragAndDrop-CZzNmncv.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-De-3IWB8.js";import"./SelectionManager-COcNurEV.js";import"./useEvent-fLqVt5ZT.js";import"./useDescription-DauRvPVC.js";import"./inertValue-DMz8zWfp.js";import"./useHighlightSelectionDescription-HjD_l69i.js";import"./useUpdateEffect-5TEVnRj9.js";import"./ListKeyboardDelegate-CW6N_7fN.js";import"./useHasTabbableChild-BY-DuydG.js";import"./Checkbox-CYwW2wA4.js";import"./Form-xMoO26Fm.js";import"./check-yOFA-G1T.js";import"./useToggleState--HOAdt9L.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
