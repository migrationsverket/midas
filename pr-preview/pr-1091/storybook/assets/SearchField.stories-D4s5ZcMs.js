import{r as m,f as l,j as t}from"./iframe-BiqtS-LP.js";import{S as d}from"./SearchField-Cktr6J9r.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BEeSrsxf.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-D31sClCQ.js";import"./utils-DDp3zx2O.js";import"./useLocalizedStringFormatter-BjTggtdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DP89mjaY.js";import"./useFocusRing-BBdC9X4b.js";import"./index-DTfFxrYl.js";import"./index-Bz2sGi_M.js";import"./useFormValidation-CSIxhFru.js";import"./useField-CaYVL4H3.js";import"./Button-Dc8C55b6.js";import"./Hidden-DFfMyXk8.js";import"./useLabels-CVc1Ewfj.js";import"./useButton-C1JXpszC.js";import"./search-Cz9m215I.js";import"./createLucideIcon-DKP3y2-x.js";import"./ClearButton-D7kYobOp.js";import"./Button-HP_18L76.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-C1qYlgbG.js";import"./VisuallyHidden-50sq9ta1.js";import"./x-tfBXJ63x.js";import"./FieldError-1zu70EvV.js";import"./Text-D-mv30w6.js";import"./Text-BTm6pr0L.js";import"./RSPContexts-Dx5-en_D.js";import"./Collection-BAHLD-pp.js";import"./index-CR_cbryd.js";import"./DragAndDrop-CNGYXdIu.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DfyBs16K.js";import"./SelectionManager-CFase-FQ.js";import"./useEvent-BCPLxZ21.js";import"./useDescription-R9tt-U1b.js";import"./inertValue-BxEqvVP0.js";import"./useHighlightSelectionDescription-CS4jmgI1.js";import"./useUpdateEffect-CeI3gIyh.js";import"./ListKeyboardDelegate-C4sdMyQn.js";import"./useHasTabbableChild-D5Y1qJsM.js";import"./Checkbox-BwHjzH-w.js";import"./Form-C1Ck1pmt.js";import"./check-CpVME2aF.js";import"./useToggleState-Dmsa6If5.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
