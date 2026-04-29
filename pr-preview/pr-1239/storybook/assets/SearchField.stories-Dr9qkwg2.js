import{r as m,f as l,j as t}from"./iframe-D2jWlRbY.js";import{S as d}from"./SearchField-D9jCIAkf.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-MWUm9Kx6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgILje6T.js";import"./clsx-B-dksMZM.js";import"./Form-CrsOPGrC.js";import"./useFocusRing-DCfgz9z-.js";import"./index-BIIWHLUG.js";import"./index-CZEA3OWg.js";import"./Input-D-UT_ZU8.js";import"./Hidden-BQ9eCogI.js";import"./Button-C20mW5cN.js";import"./useLabel-Dsg-DSz8.js";import"./useLabels-GFu7dakN.js";import"./useButton-Z6COahNx.js";import"./FieldError-BlwhWSc6.js";import"./Text-BlnXWmBt.js";import"./clsx-Ciqy0D92.js";import"./Text-dwHB4N6Q.js";import"./RSPContexts-DBHxiWWN.js";import"./Group-CuzXyiPi.js";import"./useControlledState-TsNhVwVg.js";import"./useLocalizedStringFormatter-Bbt0gUnN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D3Jer9O5.js";import"./useField-DthL3lsX.js";import"./TextField.module-DdivwlC8.js";import"./search-BSbAp5Gs.js";import"./createLucideIcon-3nESSKIe.js";import"./x-CXavF2G1.js";import"./useLocalizedStringFormatter-BadNQPEc.js";import"./Button-Cx6hm3Pz.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DcHq__qP.js";import"./Collection-CDPRulZI.js";import"./index-ClO5XkG8.js";import"./DragAndDrop--juY4dfn.js";import"./getScrollParent-Bttan2TX.js";import"./scrollIntoView-ZO2UpkDZ.js";import"./SelectionIndicator-De0BlSZX.js";import"./SelectionManager-GdUQ0_3g.js";import"./useEvent-CcxES9pj.js";import"./useDescription-CJaXbPeA.js";import"./inertValue-DvBY2X1T.js";import"./useHighlightSelectionDescription-CaICZmpR.js";import"./useUpdateEffect-BpAfY_Tt.js";import"./ListKeyboardDelegate-fCGrHL_b.js";import"./useHasTabbableChild-B3ChlGsF.js";import"./Checkbox-Cmvmc15Q.js";import"./check-BaXb2ZAW.js";import"./useToggleState-BbzWPpkt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
