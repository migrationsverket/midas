import{r as m,f as l,j as t}from"./iframe-4jp4gloH.js";import{S as d}from"./SearchField-Cg8pUEXc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-YgNmZzGp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-VVEWI3IK.js";import"./clsx-B-dksMZM.js";import"./Form-CIwvIR5N.js";import"./useFocusRing-CHjnTN6p.js";import"./index-BZ8dxgHN.js";import"./index-Ba_IRaMO.js";import"./Input-DBjxQExL.js";import"./Hidden-uxp9aDmP.js";import"./Button-BmPmOVkQ.js";import"./useLabel-BAWcaNxa.js";import"./useLabels-BIxc1erV.js";import"./useButton-Cnbi6eSC.js";import"./FieldError-D-ucO46w.js";import"./Text-DKG8In0g.js";import"./clsx-Ciqy0D92.js";import"./Text-CaWuTb4e.js";import"./RSPContexts-C_Tj-sgU.js";import"./Group-Cv7i4TUW.js";import"./useControlledState-C8OaseGF.js";import"./useLocalizedStringFormatter-DPlQOnfn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DUCQouM-.js";import"./useField-C6NTEJ5-.js";import"./TextField.module-DdivwlC8.js";import"./search-CQX8PLUy.js";import"./createLucideIcon-BGZ9Sagt.js";import"./x-C0TcUHvQ.js";import"./useLocalizedStringFormatter-BH6_V3D9.js";import"./Button-CeMvvwss.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CwExooWt.js";import"./Collection-D6gGdmWj.js";import"./index-GU77QnNE.js";import"./DragAndDrop-C5-l-n2k.js";import"./getScrollParent-lyddzNLU.js";import"./scrollIntoView-LVymhG08.js";import"./SelectionIndicator-DERD32HY.js";import"./SelectionManager-qtDdSSC6.js";import"./useEvent-BSjWwKyO.js";import"./useDescription-Ca_N61mq.js";import"./inertValue-GoLX_OEB.js";import"./useHighlightSelectionDescription-CJdLPThH.js";import"./useUpdateEffect-BRfG-lBP.js";import"./ListKeyboardDelegate-BU755iyf.js";import"./useHasTabbableChild-CTCRMb5c.js";import"./Checkbox-pONn179C.js";import"./check--2MCwuKZ.js";import"./useToggleState-D7VvvSbM.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
