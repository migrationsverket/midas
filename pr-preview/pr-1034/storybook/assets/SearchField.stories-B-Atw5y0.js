import{r as m,f as l,j as t}from"./iframe-BQxOfzlW.js";import{S as d}from"./SearchField-BzyMmIzb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BzZBWW7T.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DfXJmpIS.js";import"./utils-BXBr2vrV.js";import"./useLocalizedStringFormatter-CK8fZOyp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ChC9H0-F.js";import"./useFocusRing-DQFHtdEB.js";import"./index-DYsqMbTI.js";import"./index-D95GD9Yp.js";import"./useFormValidation-BXrbXpbC.js";import"./useField-CuahQc0k.js";import"./Button-B8qi-92i.js";import"./Hidden-VLZyivb1.js";import"./useLabels-zI525H0W.js";import"./useButton-C-Vp9A3A.js";import"./search-ClwsmCQo.js";import"./createLucideIcon-5RmQ-8qX.js";import"./ClearButton-ZtfkrUN1.js";import"./Button-BPwMgPSD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_higiKm.js";import"./VisuallyHidden-Sl6NNMXK.js";import"./x-IcEcso0D.js";import"./FieldError-dlUiDVEq.js";import"./Text-BZHSWyDa.js";import"./Text-XBZd4_As.js";import"./RSPContexts-CmlY3_rm.js";import"./Collection-Dke8_xmQ.js";import"./index-BD-gBNV-.js";import"./DragAndDrop-Df79g4Ww.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CrAjeEEw.js";import"./SelectionManager-DFqTi-k6.js";import"./useEvent-BAia882S.js";import"./useDescription-n_gbERc3.js";import"./inertValue-CbR4NTlA.js";import"./useHighlightSelectionDescription-BxSUhNgl.js";import"./useUpdateEffect-CJqCrF9H.js";import"./ListKeyboardDelegate-Cp2cso8X.js";import"./useHasTabbableChild-DZe1FxpF.js";import"./Checkbox-B7A9JDOY.js";import"./Form-B5GBoHi2.js";import"./check-Sz4qFS0C.js";import"./useToggleState-CpLu0OH9.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
