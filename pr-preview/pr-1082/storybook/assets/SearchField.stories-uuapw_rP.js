import{r as m,f as l,j as t}from"./iframe-Bid_S7I4.js";import{S as d}from"./SearchField-DvKLWNFl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DoT3vEWx.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BWQVgipy.js";import"./utils-B2qcFePq.js";import"./useLocalizedStringFormatter-5FSqA3CS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CQAw8L_p.js";import"./useFocusRing-CGf0hTBa.js";import"./index-CbxEA1vr.js";import"./index-CZS9W8aw.js";import"./useFormValidation-C2lh5Bmq.js";import"./useField-Ot15oXQU.js";import"./Button-CxmUZ178.js";import"./Hidden-B_IoczkA.js";import"./useLabels-CtsjeuWn.js";import"./useButton-D9fSscge.js";import"./search-0tJ5reVU.js";import"./createLucideIcon-D8f6cvff.js";import"./ClearButton-DRK04mEL.js";import"./Button-CRgnzWDb.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-D8yQOpe1.js";import"./VisuallyHidden-B_l7GjPs.js";import"./x-B7kqcZNl.js";import"./FieldError-B0mVz9cL.js";import"./Text-GfN3CyXi.js";import"./Text-52ihcTiX.js";import"./RSPContexts-Yr0bwy4q.js";import"./Collection-3S2dApvX.js";import"./index-BSnunQ2s.js";import"./DragAndDrop-BoxX_Xg4.js";import"./getScrollParent-CjkeExGQ.js";import"./scrollIntoView-B0aCs9nt.js";import"./SelectionIndicator-B1sgBrat.js";import"./SelectionManager-DP8dXlBl.js";import"./useEvent-B_2WmI7N.js";import"./useDescription-CiTmE2hO.js";import"./inertValue-DE0h9osN.js";import"./useHighlightSelectionDescription-BBtuzsJ5.js";import"./useUpdateEffect-CDLnIEYa.js";import"./ListKeyboardDelegate-Bje-SQV-.js";import"./useHasTabbableChild-C-dTdhS1.js";import"./Checkbox-HWqzefVz.js";import"./Form-CLhv9E59.js";import"./check-DKZrZTnI.js";import"./useToggleState-DbME05rS.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
