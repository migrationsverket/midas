import{r as m,f as l,j as t}from"./iframe-Yvl_hQp1.js";import{S as d}from"./SearchField-gmY0-FFi.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CCtvxsK5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DBQiRr7K.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DyHxCAdy.js";import"./utils-DYWQ1ZEX.js";import"./useLocalizedStringFormatter-BuxVSRdP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cff4XoDp.js";import"./useFocusRing-B03ZjHpo.js";import"./index-DOjFyTO0.js";import"./index-ClsdGyI8.js";import"./useFormValidation-6h1IEFOG.js";import"./useField-CjYuO0yz.js";import"./Button-BJxa14qf.js";import"./Hidden-BepZ5jXl.js";import"./useLabels-ChKgIqy0.js";import"./useButton-Zt3QI29N.js";import"./search-CWXqVLMv.js";import"./createLucideIcon-B92K0nKO.js";import"./ClearButton-BtWmDUUa.js";import"./Button-B2x0GTnC.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DBNxzRKc.js";import"./VisuallyHidden-CLE8P4Kj.js";import"./x-Bk4hikID.js";import"./FieldError-B1qUY16S.js";import"./Text-BVqhKK-w.js";import"./Text-C7yRWRnj.js";import"./RSPContexts-Cb4Wpr2g.js";import"./Collection-CWPVl2sl.js";import"./index-CR2Ce-1F.js";import"./DragAndDrop-BalWDQue.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Di7w77db.js";import"./SelectionManager-CLQYY3dC.js";import"./useEvent-CQvT5sdB.js";import"./useDescription-B_NDvIIC.js";import"./inertValue-BtYpuC2u.js";import"./useHighlightSelectionDescription-Cejb-x-A.js";import"./useUpdateEffect-D4L84otH.js";import"./ListKeyboardDelegate-Drr8UQG_.js";import"./useHasTabbableChild-DLSMLULN.js";import"./Checkbox-DOZbrqjq.js";import"./Form-CPXB3TdM.js";import"./check-Blk2ueJO.js";import"./useToggleState-CmgcqzTV.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
