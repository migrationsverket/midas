import{r as m,f as l,j as t}from"./iframe-UW8vLm1f.js";import{S as d}from"./SearchField-DlDtMbUm.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Clq6FHyn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DrPYTGHy.js";import"./utils-CLOZA6Qr.js";import"./useLocalizedStringFormatter-ILC68sUH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BxaRiYVo.js";import"./useFocusRing-CMx22NqV.js";import"./index-Cq0AMSqT.js";import"./index-TM4f8tXD.js";import"./useFormValidation-CCF-9150.js";import"./useField-C9XmYr2d.js";import"./Button-7au76wYW.js";import"./Hidden-BxY2u9UP.js";import"./useLabels-DT0_oM0p.js";import"./useButton-DHMLeTON.js";import"./search-Dtuv1ZAX.js";import"./createLucideIcon-D1-wdHpr.js";import"./ClearButton-Bu_-Lru8.js";import"./Button-Bq-BzB1-.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B2qxmHUY.js";import"./VisuallyHidden-D55BsDJa.js";import"./x-tk0MJ5Od.js";import"./FieldError-2Or80766.js";import"./Text-Dog5UxXw.js";import"./Text-B07qXiJx.js";import"./RSPContexts-YZOHPwcP.js";import"./Collection-Cq3rGgRd.js";import"./index-Cs4cHTgU.js";import"./DragAndDrop-BTVdI2Iy.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CqMYmib_.js";import"./SelectionManager-DVFtTB8Q.js";import"./useEvent-Bfb0EIZl.js";import"./useDescription-Cf2Sv6pY.js";import"./inertValue-2uTtVCCz.js";import"./useHighlightSelectionDescription-Dp2BMQpi.js";import"./useUpdateEffect-Dre1Tddy.js";import"./ListKeyboardDelegate-LAGyR_aw.js";import"./useHasTabbableChild-DpsDMLtB.js";import"./Checkbox-BxzX1ex_.js";import"./Form-bRhU2Psn.js";import"./check-B4ze5XD5.js";import"./useToggleState-BsElWDIx.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
