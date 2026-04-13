import{r as m,f as l,j as t}from"./iframe-CYSKzr0I.js";import{S as d}from"./SearchField-CY3_WbZb.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Bfy7TzDZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ByZ0CNGg.js";import"./clsx-B-dksMZM.js";import"./Form-DeTa1GGT.js";import"./useFocusRing-BOmMevWO.js";import"./index-DJnpB-SU.js";import"./index-BKF9VLNz.js";import"./Input-B5TltZNv.js";import"./Hidden-nUwUlPG8.js";import"./Button-DDpb5IsZ.js";import"./useLabel-BSP_KiPN.js";import"./useLabels-CU1dbJnt.js";import"./useButton-DFwA3R9x.js";import"./FieldError-pBIr7GBS.js";import"./Text-D-FhadIY.js";import"./clsx-Ciqy0D92.js";import"./Text-BV0i2D1f.js";import"./RSPContexts-aAwDc8x5.js";import"./Group-kfhBFxvy.js";import"./useControlledState-YbLesBTN.js";import"./useLocalizedStringFormatter-ClZt7a0N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-wzBMBhWC.js";import"./useField-9poXgOx8.js";import"./TextField.module-DdivwlC8.js";import"./search-C6lbHB7U.js";import"./createLucideIcon-DLSGmePH.js";import"./x-BEC-7ATt.js";import"./useLocalizedStringFormatter-D5bMO4Zi.js";import"./Button-BBfM7fHR.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D5I2qOtz.js";import"./Collection-CfkoZBPn.js";import"./index-HmT-HBiW.js";import"./DragAndDrop-BA_L6dCr.js";import"./getScrollParent-DyjFmHbi.js";import"./scrollIntoView-DNouCeg5.js";import"./SelectionIndicator-DSerCQMG.js";import"./SelectionManager-OX1LghzF.js";import"./useEvent-F_BKG7Ay.js";import"./useDescription-BdJNmK5T.js";import"./inertValue-BT40O4WM.js";import"./useHighlightSelectionDescription-CNZei0_J.js";import"./useUpdateEffect-Bo7Aw6XJ.js";import"./ListKeyboardDelegate-Bm3ugmfh.js";import"./useHasTabbableChild-Cn3WEGc7.js";import"./Checkbox-D_0m9l_n.js";import"./check-BMBbR8fJ.js";import"./useToggleState-BR0m-ieM.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
