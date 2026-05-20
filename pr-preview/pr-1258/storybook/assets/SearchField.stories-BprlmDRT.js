import{r as m,f as l,j as t}from"./iframe-UJ3BwdI6.js";import{S as d}from"./SearchField-Dep2O3Is.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CrAMoBj9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BYceCV3C.js";import"./clsx-B-dksMZM.js";import"./Form-BoynS74H.js";import"./useFocusRing-CLeeQzke.js";import"./index-DAZT_GQr.js";import"./index-Bx8foN3C.js";import"./Input-TdTFBGXk.js";import"./Hidden-Dl3PKEKv.js";import"./Button-C3rI1i5q.js";import"./useLabel-B0g5vJvf.js";import"./useLabels-C5RnXiv5.js";import"./useButton-Cn8mW4Ll.js";import"./FieldError-CS9phB3k.js";import"./Text-BU9YFTb1.js";import"./clsx-Ciqy0D92.js";import"./Text-C99-Gc34.js";import"./RSPContexts-JudtSyi0.js";import"./Group-Cj4qpDe1.js";import"./useControlledState-SS_iM14g.js";import"./useLocalizedStringFormatter-C9onPQuM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-VNOp8-r0.js";import"./useField-XAlNn7CP.js";import"./TextField.module-DdivwlC8.js";import"./search-DvWDg8rF.js";import"./createLucideIcon-C1FynrDV.js";import"./x-BHjLPSUz.js";import"./useLocalizedStringFormatter-BPE-JPT8.js";import"./Button-C7x5CU1C.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-KE5d7FBc.js";import"./Collection-VaBd8FzM.js";import"./index-Cm_EPirj.js";import"./DragAndDrop-DtipxoSH.js";import"./getScrollParent-DHFOoCum.js";import"./scrollIntoView-CTYRmDo1.js";import"./SelectionIndicator-D_gUha_f.js";import"./SelectionManager-BujgrAkT.js";import"./useEvent-CTyOrL8U.js";import"./useDescription-C3PTeJJa.js";import"./inertValue-DIyF4aEx.js";import"./useHighlightSelectionDescription-D65I50oZ.js";import"./useUpdateEffect-Wx61miHq.js";import"./ListKeyboardDelegate-BDLnRayo.js";import"./useHasTabbableChild-BKzX5ew-.js";import"./Checkbox-CLJ7wkUL.js";import"./check-DdGCdeFn.js";import"./useToggleState-DKYAthNW.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
