import{r as m,f as l,j as t}from"./iframe-yDDvrWXA.js";import{S as d}from"./SearchField-CJAbrWic.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dug1tTQd.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-g-F492tU.js";import"./clsx-B-dksMZM.js";import"./Form-BRcNXWLY.js";import"./useFocusRing-B8EF4-Pv.js";import"./index-C7Z2RoQQ.js";import"./index-D5oXpZJ0.js";import"./Input-DSWEXy8D.js";import"./Hidden-DwvTSKmX.js";import"./Button-BKPyufTm.js";import"./useLabel-HsQrSNDJ.js";import"./useLabels-BAb68OIq.js";import"./useButton-C0YlumWP.js";import"./FieldError-CjrZ6id8.js";import"./Text-lgWPOHfn.js";import"./clsx-Ciqy0D92.js";import"./Text-zKZPeGrs.js";import"./RSPContexts-BHMRgdEM.js";import"./Group-su1k1c30.js";import"./useControlledState-DZNSaZzu.js";import"./useLocalizedStringFormatter-Dx4LUfLz.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DmpQQ6rN.js";import"./useField-CiiIrWAP.js";import"./TextField.module-DdivwlC8.js";import"./search-D2h2-0Q7.js";import"./createLucideIcon-BAD1RTf1.js";import"./x-8p5vQLYx.js";import"./useLocalizedStringFormatter-CwuLAbHo.js";import"./Button-DrFRlYBv.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B50WqWni.js";import"./Collection-CFU2EU6h.js";import"./index-DJj8GrZs.js";import"./DragAndDrop-DJ2ansO-.js";import"./getScrollParent-0zuGuC-1.js";import"./scrollIntoView-n_Hd7XfS.js";import"./SelectionIndicator-DDv3iAvt.js";import"./SelectionManager-Dt46tqv0.js";import"./useEvent-DV78v9xt.js";import"./useDescription-BnCt_ups.js";import"./inertValue-OTLTjnFy.js";import"./useHighlightSelectionDescription-BohwBv5e.js";import"./useUpdateEffect-vD26oWjk.js";import"./ListKeyboardDelegate-hpjtAvgx.js";import"./useHasTabbableChild-Blwd9_ks.js";import"./Checkbox-Cpwc5M8k.js";import"./check-Cf1Elk8R.js";import"./useToggleState-DbLx9XB0.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
