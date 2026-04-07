import{r as m,f as l,j as t}from"./iframe-CFJCKKvO.js";import{S as d}from"./SearchField-yOChYgPi.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-d8bPXdYI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-GebBTRfX.js";import"./clsx-B-dksMZM.js";import"./Form-CHs7kAFH.js";import"./useFocusRing-BNbcqK1m.js";import"./index-D3I_2kbv.js";import"./index-DmhLxtfg.js";import"./Input-DdhlBYGM.js";import"./Hidden-DcC3hzXb.js";import"./Button-BT7UBoWJ.js";import"./useLabel-Byk-C4h5.js";import"./useLabels-BTsH0KFj.js";import"./useButton-DAHkBXtl.js";import"./FieldError-Cwblg-Fg.js";import"./Text-3-m5yiWA.js";import"./clsx-Ciqy0D92.js";import"./Text-Ch1K88hl.js";import"./RSPContexts-DYC9qzTU.js";import"./Group-DVGOj2ri.js";import"./useControlledState-BfOHS3qu.js";import"./useLocalizedStringFormatter-KBkMSAGg.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BDbYubUt.js";import"./useField-BeHiy9Ck.js";import"./TextField.module-DdivwlC8.js";import"./search-BMW3-Btx.js";import"./createLucideIcon-DogT9pAN.js";import"./x-C7yXQpYD.js";import"./useLocalizedStringFormatter-BHn-ZNo3.js";import"./Button-xnJUq7xJ.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Y2lOv2IN.js";import"./Collection-yIcWgyNm.js";import"./index-CAr9uyju.js";import"./DragAndDrop-BoSp4AWz.js";import"./getScrollParent-B9G2XCiT.js";import"./scrollIntoView-Co7GAAYl.js";import"./SelectionIndicator-DgmnjBYR.js";import"./SelectionManager-x1Quu5h-.js";import"./useEvent-voCcxRjk.js";import"./useDescription-C4PJeRJw.js";import"./inertValue-Lo_mYcor.js";import"./useHighlightSelectionDescription-C6iAXwDh.js";import"./useUpdateEffect-wk1lB69L.js";import"./ListKeyboardDelegate-9mmgmB2G.js";import"./useHasTabbableChild-COJUnXwe.js";import"./Checkbox-BACYcD1x.js";import"./check-DjnLPOJp.js";import"./useToggleState-BSVptSgt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
