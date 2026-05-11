import{r as m,f as l,j as t}from"./iframe-ZWFuO3rS.js";import{S as d}from"./SearchField-BPYiYnMV.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DxjguS_Q.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CXJrMo2L.js";import"./clsx-B-dksMZM.js";import"./Form-QTqY28Eg.js";import"./useFocusRing-CF4sVLCG.js";import"./index-BuEPxCUb.js";import"./index-CW1b9fzZ.js";import"./Input-DDbyFfi8.js";import"./Hidden-DlAqJEIp.js";import"./Button-CuvBXfLT.js";import"./useLabel-s0mfMDbD.js";import"./useLabels-BdKRxhZh.js";import"./useButton-otN3sW9Y.js";import"./FieldError-BqdH46Wm.js";import"./Text-CW08t5T_.js";import"./clsx-Ciqy0D92.js";import"./Text-uwKeqPz3.js";import"./RSPContexts-Dt_P8EmM.js";import"./Group-C3Kvev_s.js";import"./useControlledState-CaSPfHyR.js";import"./useLocalizedStringFormatter-w6fCSWeH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cv92JwZx.js";import"./useField-DLnhlBC6.js";import"./TextField.module-DdivwlC8.js";import"./search-BDOJpwSo.js";import"./createLucideIcon-BJpb_u0I.js";import"./x-C7_Ecf5k.js";import"./useLocalizedStringFormatter-3X8tf49V.js";import"./Button-DoVlW0aQ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-5iCcQboa.js";import"./Collection-BWOiDNzU.js";import"./index-D3vqNWyO.js";import"./DragAndDrop-Dl3IHPMw.js";import"./getScrollParent-CnRw05DR.js";import"./scrollIntoView-CxB-7RAS.js";import"./SelectionIndicator-BD5ZlguQ.js";import"./SelectionManager-UM6kyFyM.js";import"./useEvent-D0Q6FxQg.js";import"./useDescription-BZozsu8w.js";import"./inertValue-DKkRsn_g.js";import"./useHighlightSelectionDescription-4iO9zq6b.js";import"./useUpdateEffect-CaIs76Ri.js";import"./ListKeyboardDelegate-06m2HPXH.js";import"./useHasTabbableChild-COiLaO16.js";import"./Checkbox-icgjHYAV.js";import"./check-PZkhBkOP.js";import"./useToggleState-s5zCmzHy.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
