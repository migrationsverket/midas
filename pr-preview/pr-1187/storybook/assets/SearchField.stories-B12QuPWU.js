import{r as m,f as l,j as t}from"./iframe-CM25YVMI.js";import{S as d}from"./SearchField-DfCKNCv4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cv_kO7OZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B96ufrPs.js";import"./clsx-B-dksMZM.js";import"./Form-COfnJ4dZ.js";import"./useFocusRing-leQD3u2F.js";import"./index-DYgoHuTv.js";import"./index-Dkdrw9MX.js";import"./Input-B_XB7CeP.js";import"./Hidden-Bkjvz6Ri.js";import"./Button-vkdXqgie.js";import"./useLabel-Bns7seSC.js";import"./useLabels-61TYLMjS.js";import"./useButton-B_beWRfB.js";import"./FieldError-DrjYFklj.js";import"./Text-DDiDpkRq.js";import"./clsx-Ciqy0D92.js";import"./Text-D4mHh6eT.js";import"./RSPContexts-BEyD-TmB.js";import"./Group-X-eushgm.js";import"./useControlledState-FG_bUeqE.js";import"./useLocalizedStringFormatter-B8uPJVbi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B_mduAgG.js";import"./useField-BcLvgBhR.js";import"./TextField.module-DdivwlC8.js";import"./search-DtjGtkDE.js";import"./createLucideIcon-Br4oCZrR.js";import"./x-B7ImzBTw.js";import"./useLocalizedStringFormatter-DdE69EWU.js";import"./Button-CImuJsqD.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CwsE6PRe.js";import"./Collection-DyNLDyBt.js";import"./index-CLVOANuP.js";import"./DragAndDrop-R9OgGxXw.js";import"./getScrollParent-CcTlIiv2.js";import"./scrollIntoView-CM-wWI7V.js";import"./SelectionIndicator-CXCiqDeB.js";import"./SelectionManager-DAIHpPMl.js";import"./useEvent-BJWNvlK2.js";import"./useDescription-D-2ki_PT.js";import"./inertValue-DLoqiMrA.js";import"./useHighlightSelectionDescription-Ad_eUCxT.js";import"./useUpdateEffect-BfioqoHa.js";import"./ListKeyboardDelegate-B1WwTEns.js";import"./useHasTabbableChild-CZm-0bIL.js";import"./Checkbox-BmtzQdj4.js";import"./check-BAMyXGGo.js";import"./useToggleState-BQAAMLqx.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
