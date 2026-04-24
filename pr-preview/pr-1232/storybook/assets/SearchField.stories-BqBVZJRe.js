import{r as m,f as l,j as t}from"./iframe-Bsq2Gecy.js";import{S as d}from"./SearchField-DpSjoxhd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-HBKbkGRq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEAPqOk0.js";import"./clsx-B-dksMZM.js";import"./Form-CirE0Ecy.js";import"./useFocusRing-Duh6XNKg.js";import"./index-Dx8tMrH0.js";import"./index-BRYV9rT7.js";import"./Input-CVVchZra.js";import"./Hidden-BUmnbfmf.js";import"./Button-Dgb6FvaO.js";import"./useLabel-DPyv_VKO.js";import"./useLabels-DBANshh8.js";import"./useButton-B8W9dyb3.js";import"./FieldError-C-dVYh2X.js";import"./Text-BbliZ5q4.js";import"./clsx-Ciqy0D92.js";import"./Text-CN4UKteu.js";import"./RSPContexts-B54NxITZ.js";import"./Group-D5jdMy_A.js";import"./useControlledState-BhYy7T42.js";import"./useLocalizedStringFormatter-CvMlUMFL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DR-qlDF_.js";import"./useField-ErwE8ZmA.js";import"./TextField.module-DdivwlC8.js";import"./search-DyksJvQg.js";import"./createLucideIcon-CYPfeOBH.js";import"./x-BiXsmrYJ.js";import"./useLocalizedStringFormatter-mauUPS39.js";import"./Button-2sJltsSG.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Dj8T0Unv.js";import"./Collection-lWVggD0C.js";import"./index-D1TSbjCJ.js";import"./DragAndDrop-CXzAcB8J.js";import"./getScrollParent--THwKu2l.js";import"./scrollIntoView-BBGrgUMp.js";import"./SelectionIndicator-C-DSpShj.js";import"./SelectionManager-Ctfsl1Jn.js";import"./useEvent-B8d2Ooe_.js";import"./useDescription-BzFZmdMU.js";import"./inertValue-B7ixd9w1.js";import"./useHighlightSelectionDescription-CD_-BnUl.js";import"./useUpdateEffect-BLZXSrnY.js";import"./ListKeyboardDelegate-bdj1-D1M.js";import"./useHasTabbableChild-CY3er7N8.js";import"./Checkbox-DldPrc6Q.js";import"./check-85YAxsjN.js";import"./useToggleState-Fg6qbCPY.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
