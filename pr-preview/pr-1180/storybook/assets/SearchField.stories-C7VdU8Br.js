import{r as m,f as l,j as t}from"./iframe-CH21sBFo.js";import{S as d}from"./SearchField-CzkHt5JQ.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DwOvnWjR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BTsYysht.js";import"./clsx-B-dksMZM.js";import"./Form-CVljI_fE.js";import"./useFocusRing-DLE_Hwk5.js";import"./index-BSkkjiWB.js";import"./index-BSEruQCs.js";import"./Input-C0xGllCq.js";import"./Hidden-BZUBqXYz.js";import"./Button-Cyld21y_.js";import"./useLabels-dAMIXjYB.js";import"./useButton-B_byaW6S.js";import"./FieldError-27wmxIep.js";import"./Text-BvEBpsjb.js";import"./clsx-Ciqy0D92.js";import"./Text-irla2VTm.js";import"./RSPContexts-kvxCI0gF.js";import"./Group-BkO6iFKp.js";import"./useControlledState-BSIuYOQP.js";import"./useLocalizedStringFormatter-DawUslhI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-RMARdNiJ.js";import"./useField-D98AzuON.js";import"./TextField.module-DdivwlC8.js";import"./search-DZGKVacc.js";import"./createLucideIcon-BCbaEzrv.js";import"./x-BvM5og85.js";import"./useLocalizedStringFormatter-CoUJdwyc.js";import"./Button-DAqWGZgG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BbJs2R-u.js";import"./Collection-Cv8r9qAi.js";import"./index-CqPeTyvA.js";import"./DragAndDrop-add0QyQX.js";import"./getScrollParent-DE7toX-r.js";import"./scrollIntoView-By99Ab3d.js";import"./SelectionIndicator-DQXVG8Dk.js";import"./SelectionManager-DqQLiQaF.js";import"./useEvent-B6n2-V8U.js";import"./useDescription-B4sJiGX5.js";import"./inertValue-tbelthcN.js";import"./useHighlightSelectionDescription-DGDi87g6.js";import"./useUpdateEffect-UXW7fNt2.js";import"./ListKeyboardDelegate-DkHv3-VU.js";import"./useHasTabbableChild-CdaVl1MM.js";import"./Checkbox-oCdkhzl9.js";import"./check-DZxmfyQr.js";import"./useToggleState-DxOUI8X3.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
