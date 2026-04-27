import{r as m,f as l,j as t}from"./iframe-C8x-msxk.js";import{S as d}from"./SearchField-CeBStQg7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-JUPXHbBh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-x6RmcanB.js";import"./clsx-B-dksMZM.js";import"./Form-6ANOcz_Q.js";import"./useFocusRing-pYs-dxV_.js";import"./index-esthriUJ.js";import"./index-Bvs38Ve9.js";import"./Input-rrVHQn5Q.js";import"./Hidden-BrrSlW-M.js";import"./Button-CUxxVM2V.js";import"./useLabel-fGMhI5RW.js";import"./useLabels-CTHQc_bx.js";import"./useButton-DEMiZMSi.js";import"./FieldError-rBwuM1xB.js";import"./Text-DgcFjB2j.js";import"./clsx-Ciqy0D92.js";import"./Text-DQO-SfK1.js";import"./RSPContexts-Bq-VVGt_.js";import"./Group-BNWg5GtT.js";import"./useControlledState-DCAgeBJw.js";import"./useLocalizedStringFormatter-DijUnHEf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B57wQfza.js";import"./useField-BqcO6B35.js";import"./TextField.module-DdivwlC8.js";import"./search-BYQQ8xZe.js";import"./createLucideIcon-yUmnm7ht.js";import"./x-DXHCMQVs.js";import"./useLocalizedStringFormatter-DbnioywX.js";import"./Button-vkpw1trS.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CQd7HXEj.js";import"./Collection-BXTh5i1U.js";import"./index-BjTrqTsy.js";import"./DragAndDrop-BKqzINnX.js";import"./getScrollParent-Bc34TBH3.js";import"./scrollIntoView-M59Z7YUm.js";import"./SelectionIndicator-D7TjMyr5.js";import"./SelectionManager-BnRAixSC.js";import"./useEvent-Cws_rkzS.js";import"./useDescription-CnL7BH0S.js";import"./inertValue-LQgbCXYL.js";import"./useHighlightSelectionDescription-TymcZcBq.js";import"./useUpdateEffect-BEUu9QL2.js";import"./ListKeyboardDelegate-BQ1NNIIZ.js";import"./useHasTabbableChild-D5wixfia.js";import"./Checkbox-Bo-SkR39.js";import"./check-Crya1BGn.js";import"./useToggleState-nhuC8Nm-.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
