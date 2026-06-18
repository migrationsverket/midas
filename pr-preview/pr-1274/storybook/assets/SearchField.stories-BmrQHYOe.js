import{r as m,f as l,j as t}from"./iframe-CX9u6T8Y.js";import{S as d}from"./SearchField-DWNSPowP.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C429lWug.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B_VHG1Gv.js";import"./clsx-B-dksMZM.js";import"./Form-CcjwXvgg.js";import"./useFocusRing-VvtcDzXm.js";import"./index-CMK6CEsG.js";import"./index-BVrz2ZAp.js";import"./Input-MSTc-SIR.js";import"./Hidden-BBME2lcH.js";import"./Button-DNtvrS_L.js";import"./useLabel-BDLn6W6W.js";import"./useLabels-B630tUke.js";import"./useButton-CBDoaz5U.js";import"./FieldError--tTRVDtY.js";import"./Text-C6_BqquS.js";import"./clsx-Ciqy0D92.js";import"./Text-e2IPEiX4.js";import"./RSPContexts-BNooXlrN.js";import"./Group-DykfZ54i.js";import"./useControlledState-CqdFbIjJ.js";import"./useLocalizedStringFormatter-Bk5zOPZH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DJBn353g.js";import"./useField-B8XYujKH.js";import"./TextField.module-DdivwlC8.js";import"./search-Bq6tr9Zu.js";import"./createLucideIcon-B3Yd5B-T.js";import"./x-3RPgUNSS.js";import"./useLocalizedStringFormatter-BMBTKo38.js";import"./Button-DlDZpI3n.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQlGnIWD.js";import"./Collection-BQaK6DiV.js";import"./index-BxaUb3R0.js";import"./DragAndDrop-BWXUic4m.js";import"./getScrollParent-CX4KiXNJ.js";import"./scrollIntoView-DpK8DHna.js";import"./SelectionIndicator-hxR0v41A.js";import"./SelectionManager-B23DL8iR.js";import"./useEvent-zf2pcSAO.js";import"./useDescription-EWWy_tBC.js";import"./inertValue-CSY_DUks.js";import"./useHighlightSelectionDescription-CY9Wfcjh.js";import"./useUpdateEffect-DLzyy33s.js";import"./ListKeyboardDelegate-DbPEeBPI.js";import"./useHasTabbableChild-Ce9cWAHu.js";import"./Checkbox-B64UhwDO.js";import"./check-BnSBNMEB.js";import"./useToggleState-CPgn4uGM.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
