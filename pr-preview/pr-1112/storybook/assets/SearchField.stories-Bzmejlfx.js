import{r as m,f as l,j as t}from"./iframe-Bj8DUbD9.js";import{S as d}from"./SearchField-roSRzp_C.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BDmkRneM.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-o6yOdn5X.js";import"./utils-ZO4yOhXK.js";import"./useLocalizedStringFormatter-BYlnSABI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-e-4r-eRY.js";import"./useFocusRing-JSDzquTf.js";import"./index-z9FA-6qc.js";import"./index-BheBXkbs.js";import"./useFormValidation-D4KwHiGL.js";import"./useField-ag9vEqi7.js";import"./Button-BF7jf_Ur.js";import"./Hidden-D5KISXrR.js";import"./useLabels-MzyfVlFc.js";import"./useButton-DViiPWBR.js";import"./search-DKI5pVXN.js";import"./createLucideIcon-D8pz04BM.js";import"./ClearButton-DXg7NNDY.js";import"./x-Dg59dYX4.js";import"./Button-Cmlv3L41.js";import"./Button.module-BB7N-cLd.js";import"./useLocalizedStringFormatter-DH047og8.js";import"./VisuallyHidden-CHpwvWxj.js";import"./FieldError-D0YXHKSR.js";import"./Text-sbFHWdQM.js";import"./Text-BT7-HsIw.js";import"./RSPContexts-DDd4UCxF.js";import"./Collection-BPF05rQA.js";import"./index-CtLrQJlI.js";import"./DragAndDrop-DpxZTsdD.js";import"./getScrollParent-DD_GG-02.js";import"./scrollIntoView-Cyg4d7Wf.js";import"./SelectionIndicator-C0jNY1hm.js";import"./SelectionManager-Csm6B-vw.js";import"./useEvent-CXLssXy0.js";import"./useDescription-BprtaOQi.js";import"./inertValue-DrSPY1xe.js";import"./useGridSelectionCheckbox-DLhrtrBJ.js";import"./useHighlightSelectionDescription-BfmvnWom.js";import"./useUpdateEffect-Be_dOkEG.js";import"./ListKeyboardDelegate-G0c0-2Di.js";import"./useHasTabbableChild-4amnQqWh.js";import"./Checkbox-CLUV-Gfu.js";import"./Form-D0Ugz0bB.js";import"./check-Df42ndD8.js";import"./useToggleState-DHAMQgUE.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
