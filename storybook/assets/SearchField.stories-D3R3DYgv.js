import{r as m,f as l,j as t}from"./iframe-ulpsKcT6.js";import{S as d}from"./SearchField-CSiuOkBo.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BP3qSiFX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-wsoE-YNW.js";import"./clsx-B-dksMZM.js";import"./Form-DEgitFyV.js";import"./useFocusRing-uQD3awjb.js";import"./index-BsXSE8I4.js";import"./index-CMHJHtf7.js";import"./Input-CmvjNF48.js";import"./Hidden-BdWVHvUH.js";import"./Button-BwU617iF.js";import"./useLabels-DWWSSIyp.js";import"./useButton-Dd5iumUB.js";import"./FieldError-X6YJI5lY.js";import"./Text-BD59FbNH.js";import"./clsx-Ciqy0D92.js";import"./Text-fcHQfrbB.js";import"./RSPContexts-JveuaJOR.js";import"./Group-PTt6C5kO.js";import"./useControlledState-DiDj3wpx.js";import"./useLocalizedStringFormatter-Bcmhp4XT.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DvTX9qnd.js";import"./useField-CscAiOFH.js";import"./TextField.module-DdivwlC8.js";import"./search-8TvGA3yF.js";import"./createLucideIcon-B2ayFkn-.js";import"./x-XMblJbQX.js";import"./useLocalizedStringFormatter-CL-EvLJE.js";import"./Button-DwrmJOqW.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-81lySEYl.js";import"./Collection-9kZQCZkz.js";import"./index-cpnXaknH.js";import"./DragAndDrop-DwLtpu9E.js";import"./getScrollParent-Dm65XKk9.js";import"./scrollIntoView-75XzEUIn.js";import"./SelectionIndicator-BjrtELIW.js";import"./SelectionManager-BGfyixg7.js";import"./useEvent-CR-1WX1Q.js";import"./useDescription-BFyYIavq.js";import"./inertValue-BL3Us0cr.js";import"./useHighlightSelectionDescription-Ch4eXmhF.js";import"./useUpdateEffect-DViiZDNp.js";import"./ListKeyboardDelegate-CUnJLkJW.js";import"./useHasTabbableChild-dHG0GklA.js";import"./Checkbox-B5eqAZ3f.js";import"./check-BO3MSmvL.js";import"./useToggleState-Ivm5Lot_.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
