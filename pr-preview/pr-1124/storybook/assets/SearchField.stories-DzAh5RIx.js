import{r as m,f as l,j as t}from"./iframe-C-K27eAl.js";import{S as d}from"./SearchField-uGr2a3jY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DS6k1JPt.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CJaZGGf7.js";import"./clsx-B-dksMZM.js";import"./Form-CLe3G_DV.js";import"./useFocusRing-DxSA2Sop.js";import"./index-BKKwvpcz.js";import"./index-DBCMJ7yJ.js";import"./Input-DiKPnwSr.js";import"./Hidden-Vwjx6V0Q.js";import"./Button-BT6WGe3E.js";import"./useLabels-bQBwCpKg.js";import"./useButton-UoBuyatd.js";import"./FieldError-BgyRuz1D.js";import"./Text-CDT_NlP5.js";import"./clsx-Ciqy0D92.js";import"./Text-BSrzc_20.js";import"./RSPContexts-BEdbbOnm.js";import"./Group-DrDuJs4p.js";import"./useControlledState-BS7oDD3M.js";import"./useLocalizedStringFormatter-Cnb01dil.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DA_Zh3yp.js";import"./useField-FtvPERgc.js";import"./TextField.module-DdivwlC8.js";import"./search-Bg8GbbcA.js";import"./createLucideIcon-3jo47RrT.js";import"./x-BOs9pbax.js";import"./useLocalizedStringFormatter-CVaM3I0e.js";import"./Button-BIatrZTr.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-u6B1l6x2.js";import"./Collection-BB-uLGwY.js";import"./index-Dm9DVMB2.js";import"./DragAndDrop-QOJj0Pak.js";import"./getScrollParent-DeiG1Qzx.js";import"./scrollIntoView-DCPl_J-b.js";import"./SelectionIndicator-zsTHTAds.js";import"./SelectionManager-Xw2EnXx2.js";import"./useEvent-BZmViZJ-.js";import"./useDescription-xQJDPJMa.js";import"./inertValue-Bri5PeqH.js";import"./useHighlightSelectionDescription-Dp7v0Wtk.js";import"./useUpdateEffect-SZa1eLCQ.js";import"./ListKeyboardDelegate-Dy1D5xdS.js";import"./useHasTabbableChild-BcdKmtCx.js";import"./Checkbox-CeCDsFgO.js";import"./check-Cbg_QcCC.js";import"./useToggleState-DrLLh-3c.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
