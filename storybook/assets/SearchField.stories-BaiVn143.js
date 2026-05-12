import{r as m,f as l,j as t}from"./iframe-DXV5yNVg.js";import{S as d}from"./SearchField-DYQbUc5W.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DuGIXuMC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2X0V_ch.js";import"./clsx-B-dksMZM.js";import"./Form-ChJqqoAq.js";import"./useFocusRing-D5WWltRW.js";import"./index-CzcJdf_a.js";import"./index-Ck0jOAPG.js";import"./Input-DkCtsT4u.js";import"./Hidden-D1mzcqIQ.js";import"./Button-BFHR6RXp.js";import"./useLabel-DhHgPc5x.js";import"./useLabels-CnmTVeYq.js";import"./useButton-D2_h4EWT.js";import"./FieldError-BqMBz98l.js";import"./Text-CKvHTakV.js";import"./clsx-Ciqy0D92.js";import"./Text-CBeHelAL.js";import"./RSPContexts-CFPuUxx1.js";import"./Group-2TNpPRTn.js";import"./useControlledState-gqmUfamI.js";import"./useLocalizedStringFormatter-DMugWIr_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BYn9VW6y.js";import"./useField-zA9g1QiW.js";import"./TextField.module-DdivwlC8.js";import"./search-CYT7n846.js";import"./createLucideIcon-BzcStSQs.js";import"./x-C8jYBObA.js";import"./useLocalizedStringFormatter-C4UT3jd4.js";import"./Button-BlXLhIpL.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BEiLaXoC.js";import"./Collection-BHKWOZuO.js";import"./index-DLzlm1NY.js";import"./DragAndDrop-BTqmMWcl.js";import"./getScrollParent-DEOaQKh5.js";import"./scrollIntoView-Gtl3EXZL.js";import"./SelectionIndicator-BAznZF8p.js";import"./SelectionManager-DOb3wefr.js";import"./useEvent-BKSnxFNZ.js";import"./useDescription-Br6-58Tk.js";import"./inertValue-CUpn1bkg.js";import"./useHighlightSelectionDescription-bIXhwq8f.js";import"./useUpdateEffect-BTVXTsXJ.js";import"./ListKeyboardDelegate-qY0cUxF-.js";import"./useHasTabbableChild-Bj5ZUqYN.js";import"./Checkbox-fTIWIuc7.js";import"./check-BZFGN-Er.js";import"./useToggleState-Bd6ykAuA.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
