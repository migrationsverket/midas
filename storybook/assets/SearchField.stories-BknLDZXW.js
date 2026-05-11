import{r as m,f as l,j as t}from"./iframe-B8ApkfN9.js";import{S as d}from"./SearchField-_iHZJUMR.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-qYuZIbZq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DY9Yxgt6.js";import"./clsx-B-dksMZM.js";import"./Form-a5ECdOXK.js";import"./useFocusRing-t4lmh3Yy.js";import"./index-B1GJl5u8.js";import"./index-Dam3589Q.js";import"./Input-BDo8jOp5.js";import"./Hidden-B3-5R_c4.js";import"./Button-D0ujuU3m.js";import"./useLabel-CJkRyn3E.js";import"./useLabels-C6kkXsgA.js";import"./useButton-CG0EpAju.js";import"./FieldError-BN9b5ZCd.js";import"./Text-DCpVGc-0.js";import"./clsx-Ciqy0D92.js";import"./Text-nPgffpxE.js";import"./RSPContexts-BYDi1jbG.js";import"./Group-DkHP5DWm.js";import"./useControlledState-CcqX14cB.js";import"./useLocalizedStringFormatter-fZ8nAVLV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BpOOctGj.js";import"./useField-DT8Rrx5b.js";import"./TextField.module-DdivwlC8.js";import"./search-CD7zCfmE.js";import"./createLucideIcon-tZEetkZ6.js";import"./x-DqxHC3Oe.js";import"./useLocalizedStringFormatter-5IW1LiLo.js";import"./Button-DBfSMFHv.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Cpti0KaM.js";import"./Collection-BfpbWxCO.js";import"./index-BS6AmCaV.js";import"./DragAndDrop-yDldMVV2.js";import"./getScrollParent-BsnoEbY8.js";import"./scrollIntoView-ChlyCIqm.js";import"./SelectionIndicator-DwXF7zi6.js";import"./SelectionManager-2__bJrXK.js";import"./useEvent-INSFkTc2.js";import"./useDescription-C1wJSBol.js";import"./inertValue-CpBk443T.js";import"./useHighlightSelectionDescription-9tsi5KK_.js";import"./useUpdateEffect-BcX9-QnF.js";import"./ListKeyboardDelegate-CmLx6wrK.js";import"./useHasTabbableChild-BsEAsmmv.js";import"./Checkbox-Lta3QAwY.js";import"./check-CnbtOFXD.js";import"./useToggleState-kMnrNQR-.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
