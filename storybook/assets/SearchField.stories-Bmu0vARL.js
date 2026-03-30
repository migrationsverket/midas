import{r as m,f as l,j as t}from"./iframe-DI52Qlo4.js";import{S as d}from"./SearchField-BPZ13i7k.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-4nYu85DH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-urtsDcnm.js";import"./clsx-B-dksMZM.js";import"./Form-BX2Kgv4V.js";import"./useFocusRing-2JaqZA15.js";import"./index-BMA7stMc.js";import"./index-Dz8_67dy.js";import"./Input-B264emcI.js";import"./Hidden-CscT1sly.js";import"./Button-eSR4bLK4.js";import"./useLabel-Btef6QY2.js";import"./useLabels-DmZ1Q95o.js";import"./useButton-C_swT-ux.js";import"./FieldError-CSuZWyFo.js";import"./Text-C_RzDhoB.js";import"./clsx-Ciqy0D92.js";import"./Text-D2edba9r.js";import"./RSPContexts-CrMRLfkl.js";import"./Group-BrGteZuE.js";import"./useControlledState-CLoU2XYC.js";import"./useLocalizedStringFormatter-C62DnPYV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CbfOCGrE.js";import"./useField-Da8HQzfP.js";import"./TextField.module-DdivwlC8.js";import"./search-UyV_xQyC.js";import"./createLucideIcon-Bf3dyCX1.js";import"./x-B7Z7gY9k.js";import"./useLocalizedStringFormatter-B0GJ_bM4.js";import"./Button-3POgXEp-.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Ct-vZpQ3.js";import"./Collection-hUB3sBJJ.js";import"./index-Bdpc1bHO.js";import"./DragAndDrop-BjJ6xEem.js";import"./getScrollParent-BHx5XlTQ.js";import"./scrollIntoView-hSq_mdzL.js";import"./SelectionIndicator-By0Zxqsk.js";import"./SelectionManager-CX4E6mov.js";import"./useEvent-BfgA6E-w.js";import"./useDescription-58WIc14O.js";import"./inertValue-ByaxPQ8l.js";import"./useHighlightSelectionDescription-BNh6arKM.js";import"./useUpdateEffect-BY7lbnG-.js";import"./ListKeyboardDelegate-H7rz5L58.js";import"./useHasTabbableChild-DmmOX2Ca.js";import"./Checkbox-uQauwIXh.js";import"./check-DYdNmdYP.js";import"./useToggleState-CXZejuZp.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
