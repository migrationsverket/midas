import{r as m,f as l,j as t}from"./iframe-BB-tPRzQ.js";import{S as d}from"./SearchField-DLJG_AYj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-f3NDFxNV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BktV0bPW.js";import"./clsx-B-dksMZM.js";import"./Form-DFI39c1h.js";import"./useFocusRing-Ddeo6vcg.js";import"./index-BUPWnhQ_.js";import"./index-DlKD8ct_.js";import"./Input-BtNtGeCO.js";import"./Hidden-DvrkBpIw.js";import"./Button-BE24gnSa.js";import"./useLabel-DIhHpIun.js";import"./useLabels-C4NHgo-V.js";import"./useButton-DatsifZv.js";import"./FieldError-BmvkTOqd.js";import"./Text-Bl05kWUq.js";import"./clsx-Ciqy0D92.js";import"./Text-DbHLBiJa.js";import"./RSPContexts-BmgBGX_c.js";import"./Group-BApqKGSd.js";import"./useControlledState-C03m2Mt3.js";import"./useLocalizedStringFormatter-BzEzuq1k.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BasZ0W8H.js";import"./useField-DTyHvujF.js";import"./TextField.module-DdivwlC8.js";import"./search-Dzhj3Fr4.js";import"./createLucideIcon-BAkvEDNb.js";import"./x-FcVwT7Bo.js";import"./useLocalizedStringFormatter-Btt7l4WJ.js";import"./Button-C-wbQlf4.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B0KgTif7.js";import"./Collection-BRjDfviX.js";import"./index-Bx-krfMx.js";import"./DragAndDrop-Dy20mj1v.js";import"./getScrollParent-D-jmBja6.js";import"./scrollIntoView-Cj-EggrR.js";import"./SelectionIndicator-BMNmgUmk.js";import"./SelectionManager-COjlATtX.js";import"./useEvent-3yj0JxfP.js";import"./useDescription-DnTL-4Et.js";import"./inertValue-1xJunY8L.js";import"./useHighlightSelectionDescription-B2jTZJqt.js";import"./useUpdateEffect-B_0JfJhi.js";import"./ListKeyboardDelegate-BcAY3NJ0.js";import"./useHasTabbableChild-ByB211NH.js";import"./Checkbox-CaBRmP1X.js";import"./check-DzS--0T7.js";import"./useToggleState-DKuutd8E.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
