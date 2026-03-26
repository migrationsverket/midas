import{r as m,f as l,j as t}from"./iframe-Cod1JNFG.js";import{S as d}from"./SearchField-CE9TGVhs.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-M10euKSj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-RnFRVAvs.js";import"./clsx-B-dksMZM.js";import"./Form-BAeHCcmu.js";import"./useFocusRing-BTBrbXYF.js";import"./index-B6aKl88f.js";import"./index-CYSTLAu0.js";import"./Input-CnpycvnH.js";import"./Hidden-DSAoUHUZ.js";import"./Button-DShIviGh.js";import"./useLabel-BYcG1Feb.js";import"./useLabels-Bj-Yy0gt.js";import"./useButton-CewAlskq.js";import"./FieldError-y5my5p3j.js";import"./Text-Dho6KfK4.js";import"./clsx-Ciqy0D92.js";import"./Text-DYp5dFw4.js";import"./RSPContexts-CGf9i1Cx.js";import"./Group-Dcit7Z04.js";import"./useControlledState-7bsBW9ME.js";import"./useLocalizedStringFormatter-BGVJ3s-K.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CG1kIc-t.js";import"./useField-CWDFgyK4.js";import"./TextField.module-DdivwlC8.js";import"./search-CicjwN72.js";import"./createLucideIcon-iT6Y2Uaa.js";import"./x-A2fBJB1S.js";import"./useLocalizedStringFormatter-BASSYTlJ.js";import"./Button-Bv7kxC8o.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-B_oZwuHi.js";import"./Collection-BfmwTdnM.js";import"./index-RfRuf2QY.js";import"./DragAndDrop-D-nmiLR-.js";import"./getScrollParent-4D2uxju0.js";import"./scrollIntoView-BPV88qUk.js";import"./SelectionIndicator-BUB2tGdl.js";import"./SelectionManager-9t0DIfr5.js";import"./useEvent-BoihJK-v.js";import"./useDescription-BW-G7pZE.js";import"./inertValue-Ck04LJdT.js";import"./useHighlightSelectionDescription-D07lq1B9.js";import"./useUpdateEffect-DF74fta7.js";import"./ListKeyboardDelegate-QCwOMow_.js";import"./useHasTabbableChild-fTddiScA.js";import"./Checkbox-BGJTD6a-.js";import"./check-CmaQK6Ty.js";import"./useToggleState-x_3l2NUN.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
