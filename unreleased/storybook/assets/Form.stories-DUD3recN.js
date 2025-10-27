import{j as n}from"./iframe-C_IMZI11.js";import{$ as j}from"./Form-Dhc14dNm.js";import{G}from"./Grid-BsaFvHzA.js";import{G as e}from"./GridItem-BSKsEC6a.js";import{T as r}from"./TextField-Bimk7jfL.js";import{S as I}from"./Select-D_MF5i-L.js";import{B as a}from"./Button-Cbca66eA.js";import{R as g,a as b}from"./Radio-BGi3hdos.js";import{C as h}from"./CheckboxGroup-QxfdvVcW.js";import{C as k}from"./Checkbox-gpSDbTY3.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BKskW800.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-s8LGDEN8.js";import"./useFocusRing-BBEgfa6Y.js";import"./index-BUmptT68.js";import"./index-D5F6RO1H.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Cno3o0I7.js";import"./TextField-BbgXrE8Y.js";import"./FieldError-BswohrqF.js";import"./Text-Ck-9rahk.js";import"./Text-CMxv24Bh.js";import"./RSPContexts-CqAFzDyl.js";import"./Group-CAvTXayu.js";import"./Input-DcXU-XYJ.js";import"./Hidden-B6kSx7V2.js";import"./Button-BHjPaGVS.js";import"./useLabels-DfLBK3yB.js";import"./useButton-FM3MQBDf.js";import"./useTextField-DiOy7s6w.js";import"./useControlledState-btHGLWeC.js";import"./useField-BHsLcPUu.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-B-blVrIK.js";import"./Dialog-CUXEBaUo.js";import"./OverlayArrow-D2bZPDjF.js";import"./useResizeObserver-DXDePphZ.js";import"./Collection-CYIMVfCQ.js";import"./index-CwU8Sj5D.js";import"./Separator-CYuM7X-Q.js";import"./SelectionManager-MDr_SiYl.js";import"./useEvent-BgQkDCAe.js";import"./scrollIntoView-BukwnCJF.js";import"./SelectionIndicator-CSpKl-ZZ.js";import"./useDescription-OzQGMHut.js";import"./ListKeyboardDelegate-DUO5pEwi.js";import"./PressResponder-DBtFkn20.js";import"./useLocalizedStringFormatter-CCds6hme.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CuB8w4_J.js";import"./VisuallyHidden-Brzta013.js";import"./useLocalizedStringFormatter-CD5tyAV0.js";import"./x-C52PXWn-.js";import"./createLucideIcon-7Sr44F2X.js";import"./Heading-D_HO5gvu.js";import"./info-ifSV_lZ_.js";import"./Popover-egwmqFjX.js";import"./Tag-DPLLA8wT.js";import"./ListBox-hyUh1OEO.js";import"./DragAndDrop-DTHVe-fw.js";import"./inertValue-B9Gt_h73.js";import"./useListState-DfTCqmGr.js";import"./useHighlightSelectionDescription-BrAo7zly.js";import"./useUpdateEffect-DM2YuNCp.js";import"./useHasTabbableChild-CVRA5t4K.js";import"./check-CyM455R3.js";import"./ListBoxSection-DLTFzYpj.js";import"./Virtualizer-CwqT5QWq.js";import"./chevron-down-2EU9GVwl.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-CqXYu6Za.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
