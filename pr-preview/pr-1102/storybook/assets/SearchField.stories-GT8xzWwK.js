import{r as m,f as l,j as t}from"./iframe-BaJYC4hW.js";import{S as d}from"./SearchField-DxFoz9cF.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DG17YuJK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Du80Dryz.js";import"./utils-CV_LYzzD.js";import"./useLocalizedStringFormatter-D3VNkE2Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CpF8VCOt.js";import"./useFocusRing-GVDVIwTN.js";import"./index-DOOXPPqc.js";import"./index-C6g9yftp.js";import"./useFormValidation-BMvqAl64.js";import"./useField-DXKisOI4.js";import"./Button-MJDkUy4E.js";import"./Hidden-DlyKOOC9.js";import"./useLabels-0RFifNrF.js";import"./useButton-CbZN5rLr.js";import"./search-j44MNKIj.js";import"./createLucideIcon-1N_QsJVR.js";import"./ClearButton-JbXjSTvG.js";import"./x-BqrUYLd-.js";import"./Button-CGkZxjHk.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BpY-3ExX.js";import"./VisuallyHidden-D97yOK8y.js";import"./FieldError-GCWNqEfA.js";import"./Text-Nc4TUeua.js";import"./Text-x8DptRje.js";import"./RSPContexts-CIUsqnNZ.js";import"./Collection-BoKZxKVw.js";import"./index-D1wpFRTD.js";import"./DragAndDrop-DOSQ8LBv.js";import"./getScrollParent-CQuJqaKr.js";import"./scrollIntoView-UyFo11w1.js";import"./SelectionIndicator-Cuj5Ukeh.js";import"./SelectionManager-BASpGvsc.js";import"./useEvent-BWCZrvaR.js";import"./useDescription-DRlONNEs.js";import"./inertValue-B1gSyeAR.js";import"./useHighlightSelectionDescription-CWpsAX06.js";import"./useUpdateEffect-BDnjAqDX.js";import"./ListKeyboardDelegate-Du9U_2I9.js";import"./useHasTabbableChild-BEZ2yS3x.js";import"./Checkbox-D_DuZw6S.js";import"./Form-Boa4uwor.js";import"./check-CKzEDgaq.js";import"./useToggleState-YwOYGSdB.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
